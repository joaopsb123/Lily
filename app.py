from flask import Flask, redirect, request, session, render_template
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY", "supersecretkey")

# Configurações do Discord OAuth2
CLIENT_ID = os.getenv("DISCORD_CLIENT_ID")
CLIENT_SECRET = os.getenv("DISCORD_CLIENT_SECRET")
REDIRECT_URI = os.getenv("DISCORD_REDIRECT_URI")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    discord_auth_url = (
        f"https://discord.com/oauth2/authorize?client_id=1388158298305597483&response_type=code&redirect_uri=https%3A%2F%2Flily-production.up.railway.app%2F&scope=identify+email+guilds"
    )
    return redirect(discord_auth_url)

@app.route('/auth/callback')
def auth_callback():
    code = request.args.get('code')
    data = {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'scope': 'identify guilds'
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    response = requests.post(' https://discord.com/api/oauth2/token ', data=data, headers=headers)
    credentials = response.json()

    access_token = credentials['access_token']

    user_response = requests.get(
        'https://discord.com/api/users/ @me',
        headers={'Authorization': f'Bearer {access_token}'}
    )

    user_data = user_response.json()
    session['user'] = user_data

    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if 'user' not in session:
        return redirect('/')
    user = session['user']
    return f"""
    <h1>✅ Logado como {user['username']}#{user['discriminator']}</h1>
    <pre>{user}</pre>
    """

if __name__ == '__main__':
    app.run(debug=True)
