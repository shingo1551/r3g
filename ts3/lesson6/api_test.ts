// api_test.ts
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { scenarios } from './scenario.ts';

const headers = new Headers([['content-type', 'application/json']]);

for (const scenario of scenarios) {
  Deno.test(scenario.message, async () => {
    const opt = {
      method: scenario.method,
      headers: headers,
      body: scenario.member ? JSON.stringify(scenario.member) : undefined
    };

    const res = await fetch(`http://localhost:8080/member/${scenario.id}`, opt);
    const expected = scenario.expected;

    assertEquals(res.status, expected.status);
    if (expected.member)
      assertEquals((await res.json()).member, expected.member);
    else
      await res.body?.cancel();
  });
}
