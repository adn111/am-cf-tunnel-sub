export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pUUID = url.pathname.split('/')[1];
    const qUUID = url.searchParams.get('UUID');
    const mUUID = "ec872d8f-72b0-4a04-b612-0327d85e18ed";

    if (pUUID === 'd53909c7-6094-4eda-93ec-3f96ebc1914b' || qUUID === mUUID || pUUID === '196363') {
      const h = url.searchParams.get('HOST') || 'telecom.com';
      const p = url.searchParams.get('PROXYIP') || '1.1.1.1';
      const c = `vless://${mUUID}@${p}:443?encryption=none&security=tls&sni=${h}&type=ws&host=${h}&path=%2F%3Fed%3D2048#Network`;
      return new Response(c, {
        status: 200,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      });
    }
    return new Response('Access Denied', { status: 403 });
  }
};
