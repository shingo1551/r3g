// ex2.ts
import { serve } from 'https://deno.land/std@0.148.0/http/server.ts';

const headers = new Headers([['content-type', 'text/html; charset=UTF-8']]);

const body = `
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
`;

const handler = (req: Request) => {
  const url = new URL(req.url);
  if (req.method === 'GET' && url.pathname === '/')
    return new Response(body, { headers: headers });
  else
    return new Response('Not Found', { status: 404 });
}

serve(handler, { port: 8080 });
