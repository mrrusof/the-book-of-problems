import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('helper:eq', 'Unit | Helper | eq', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('a', '1234');
  this.set('b', '1234');

  this.render(hbs`{{eq a b}}`);

  assert.equal(this.$().text().trim(), 'true');
});

