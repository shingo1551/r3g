// ex1.ts
import { serve } from 'https://deno.land/std@0.148.0/http/server.ts';
serve(() => new Response('Hello World!'), { port: 8080 });
