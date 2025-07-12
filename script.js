document.getElementById("loginBtn").addEventListener("click", () => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1388158298305597483&response_type=code&redirect_uri=https%3A%2F%2Flily-red.vercel.app%2Fapi%2Fcallback&scope=identify+email+guilds";
});
