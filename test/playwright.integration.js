'use strict';

const { assert, sinon } = require('@sinonjs/referee-sinon');
const { mochify } = require('@mochify/mochify');

describe('playwright', () => {
  it('runs test with plugin', async () => {
    sinon.replace(process.stdout, 'write', sinon.fake());

    await mochify({
      driver: `${__dirname}/../index.js`,
      reporter: 'json',
      spec: `${__dirname}/fixture/passes.js`
    });
    // @ts-ignore
    const output = process.stdout.write.firstCall.args[0];
    sinon.restore(); // Restore sandbox here or test output breaks

    const json = JSON.parse(output);
    assert.equals(json.tests.length, 1);
    assert.equals(json.tests[0].fullTitle, 'test passes');
  });
});
