const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function endpoint(webhook, fetch = () => { throw new Error('Unexpected fetch'); }) {
  const source = ts.transpileModule(fs.readFileSync('src/app/api/notify/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, { exports, require, process: { env: { DISCORD_WEBHOOK_URL: webhook } }, fetch, console: { error() {} } });
  return data => exports.POST(new Request('http://localhost/api/notify', { method: 'POST', body: JSON.stringify(data) }));
}

test('invalid addresses and oversized details are rejected before delivery', async () => {
  const post = endpoint('https://example.invalid/webhook');
  for (const data of [{ email: 'invalid' }, { email: 'test@example.com', tier: 'x'.repeat(201) }, { email: 'test@example.com', source: {} }]) {
    assert.equal((await post(data)).status, 400);
  }
});

test('a missing webhook never claims signup success', async () => {
  assert.equal((await endpoint(undefined)({ email: 'test@example.com' })).status, 503);
});

test('rejected delivery never claims signup success', async () => {
  const post = endpoint('https://example.invalid/webhook', async () => new Response('', { status: 429 }));
  assert.equal((await post({ email: 'test@example.com' })).status, 502);
});

test('transport failure never claims signup success', async () => {
  const post = endpoint('https://example.invalid/webhook', async () => { throw new Error('offline'); });
  assert.equal((await post({ email: 'test@example.com' })).status, 500);
});

test('success follows confirmed delivery and includes edition interest', async () => {
  let payload;
  const post = endpoint('https://example.invalid/webhook', async (_, init) => {
    payload = JSON.parse(init.body);
    return new Response(null, { status: 204 });
  });
  const response = await post({ email: 'test@example.com', tier: 'Maker', source: '/preorder' });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(payload.embeds[0].fields[1].value, '**Maker**');
  assert.deepEqual(payload.allowed_mentions.parse, []);
});
