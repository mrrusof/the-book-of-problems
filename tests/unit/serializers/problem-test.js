import { moduleForModel, test } from 'ember-qunit';

moduleForModel('problem', 'Unit | Serializer | problem', {
  // Specify the other units that are required for this test.
  needs: ['serializer:problem']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
