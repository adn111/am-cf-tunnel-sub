const UUID = '196363';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === `/${UUID}`) {
      return new Response("Success: Connected", { 
        status: 200,
        headers: { "content-type": "text/plain;charset=UTF-8" }
      });
    }
    return new Response("Error: 404 Not Found", { status: 404 });
  }
};
