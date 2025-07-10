document.getElementById("loginBtn").addEventListener("click", () => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&redirect_uri=https%3A%2F%2Flily-production.up.railway.app%2Fauth%2Fcallback&response_type=code&scope=identify%20guilds";
});
