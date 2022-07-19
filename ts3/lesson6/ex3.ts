// ex3.ts
import { serve } from 'https://deno.land/std@0.148.0/http/server.ts';
import { api as member } from './ex4.ts';

const handler = (req: Request) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith('/member'))
    return member(req, pathname);
  else
    return new Response('Not Found', { status: 404 });
}

serve(handler, { port: 8080 });
