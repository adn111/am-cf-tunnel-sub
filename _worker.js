export default {
  async fetch(request, env) {
    // Şifreyi Vercel ayarlarındaki UUID kutusundan çeker
    const MY_SECRET = env.UUID; 
    const url = new URL(request.url);

    if (url.pathname === `/${MY_SECRET}`) {
      // Buraya az önce çalışan panel kodlarını koyabilirsin
      // Eğer panel kodun çok uzunsa, sadece girişi doğrulamak için:
      return new Response("Success: Connected to Private Panel", { status: 200 });
    }
    return new Response("Unauthorized Access", { status: 401 });
  }
};
