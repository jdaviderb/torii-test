import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | authenticated', function(hooks) {
  setupApplicationTest(hooks);

  test('Unauthenticated user cannot go to authenticated route', async function(assert) {
    await visit('/authenticated');
    assert.equal(
      currentURL(),
      '/login',
      'Unauthenticated user is redirected to login'
    );
  });
});
