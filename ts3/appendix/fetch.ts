// fetch.ts
import { Request, Result } from './interface.ts';

const headers = new Headers([['content-type', 'application/json']]);
const results = [] as Result[];

const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync(Deno.args[0]);
const scenario = JSON.parse(decoder.decode(data)) as Request[];

for (const req of scenario) {
    const opt = {
        method: req.method,
        headers: headers,
        body: req.member ? JSON.stringify(req.member) : undefined
    };

    try {
        const res = await fetch(`http://localhost:8080/member/${req.id}`, opt);
        if (res.status !== 200)
            results.push({ req: req, err: "" + res.status });
        else
            results.push({ req: req, res: await res.json() });
    }
    catch (e) {
        console.error(e);
        results.push({ req: req, err: '' + e });
    }
}

console.log(results);
