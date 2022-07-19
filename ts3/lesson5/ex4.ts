// ex4.ts
import * as db from './ex5.ts';

export function api(req: Request, pathname: string) {
  try {
    if (req.method === 'GET')
      return get(pathname);
    else
      return new Response('Not Found', { status: 404 });
  } catch (e) {
    return new Response(e, { status: 400 });
  }
}

const headers = new Headers([['content-type', 'application/json']]);

function get(pathname: string) {
  const body = { status: 0, member: db.get(parseUrl(pathname)) };
  return new Response(JSON.stringify(body), { headers });
}

function parseUrl(pathname: string) {
  const params = pathname.split('/');
  if (params.length !== 3 || !params[2])
    throw 'Bad Request';
  else
    return params[2];
}
