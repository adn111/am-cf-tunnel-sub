export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const uuid = url.searchParams.get('UUID') || env.UUID || '196363';
    const sni = url.searchParams.get('HOST') || 'telecom.com';
    const proxy = url.searchParams.get('PROXYIP') || '1.1.1.1';

    if (url.pathname.includes(uuid)) {
      const config = `vless://${uuid}@${proxy}:443?encryption=none&security=tls&sni=${sni}&type=ws&host=${sni}&path=%2F%3Fed%3D2048#Network`;
      return new Response(config, {
        status: 200,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      });
    }
    return new Response('Access Denied', { status: 403 });
  }
};
