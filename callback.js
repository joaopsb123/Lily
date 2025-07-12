export default async function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).send('Código de autorização não fornecido');
  }

  try {
    // Troque o código por um token de acesso
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    // Redirecione para a página principal com o token
    res.redirect(`/?token=${encodeURIComponent(tokenData.access_token)}`);
  } catch (error) {
    console.error('Erro no callback:', error);
    res.status(500).send('Erro durante a autenticação');
  }
}
