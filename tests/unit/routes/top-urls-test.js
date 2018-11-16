import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | top-urls', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:top-urls');
    assert.ok(route);
  });
});
