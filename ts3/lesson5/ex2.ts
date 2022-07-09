// ex2.ts
import { serve } from 'https://deno.land/std/http/server.ts';

const headers = new Headers([['content-type', 'text/html; charset=UTF-8']]);

const body = `
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
`;

const s = serve({ port: 8080 });
for await (const req of s) {
  if (req.method === 'GET' && req.url === '/')
    req.respond({ body: body, headers: headers });
  else
    req.respond({ status: 404 });
}
