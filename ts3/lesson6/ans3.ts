// ex3.ts
import { serve } from 'https://deno.land/std/http/server.ts';
import { api as member } from './ans4.ts';

const s = serve({ port: 8080 });
for await (const req of s) {
  const url = req.url;

  if (url.startsWith('/member'))
    await member(req);
  else
    req.respond({ status: 404 });
}
