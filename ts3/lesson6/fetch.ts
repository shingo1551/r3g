// fetch.ts
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { Scenario } from './interface.ts';

const headers = new Headers([['content-type', 'application/json']]);

const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync(Deno.args[0]);
const scenarios = JSON.parse(decoder.decode(data)) as Scenario[];

for (const scenario of scenarios) {
    const opt = {
        method: scenario.method,
        headers: headers,
        body: scenario.member ? JSON.stringify(scenario.member) : undefined
    };

    try {
        const res = await fetch(`http://localhost:8080/member/${scenario.id}`, opt);
        const expected = scenario.expected;

        assertEquals(res.status, expected.status, scenario.message);
        if (expected.member)
            assertEquals((await res.json()).member, expected.member, scenario.message);
        console.log(scenario.message, 'OK')
    }
    catch (e) {
        console.error(e);
    }
}
