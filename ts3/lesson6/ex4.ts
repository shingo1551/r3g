// ex4.ts
import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { readAll } from 'https://deno.land/std/io/util.ts';
import * as db from './ex5.ts';

export async function api(req: ServerRequest) {
  const method = req.method;
  try {
    if (method === 'GET')
      get(req);
    else if (method === 'POST')
      await post(req);
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

async function post(req: ServerRequest) {
  const buff = await readAll(req.body);
  const text = new TextDecoder("utf-8").decode(buff);
  db.set(parseUrl(req.url), JSON.parse(text));
  req.respond({ body: JSON.stringify({ status: 0 }), headers: headers });
}

function parseUrl(url: string) {
  const params = url.split('/');
  if (params.length !== 3 || !params[2])
    throw 'Bad Request';
  else
    return params[2];
}
