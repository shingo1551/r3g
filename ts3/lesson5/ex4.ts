// ex4.ts
import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import * as db from './ex5.ts';

export function api(req: ServerRequest) {
  const method = req.method;
  try {
    if (method === 'GET')
      get(req);
    else
      req.respond({ status: 404 });
  } catch (_e) {
    req.respond({ status: 400 });
  }
}

const headers = new Headers([['content-type', 'application/json']]);

function get(req: ServerRequest) {
  const body = { status: 0, member: db.get(parseUrl(req.url)) };
  req.respond({ body: JSON.stringify(body), headers: headers });
}

function parseUrl(url: string) {
  const params = url.split('/');
  if (params.length !== 3 || !params[2])
    throw 'Bad Request';
  else
    return params[2];
}
