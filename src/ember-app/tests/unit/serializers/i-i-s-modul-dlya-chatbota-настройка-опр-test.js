import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-dlya-chatbota-настройка-опр', 'Unit | Serializer | i-i-s-modul-dlya-chatbota-настройка-опр', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-modul-dlya-chatbota-настройка-опр',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-modul-dlya-chatbota-анкетирование',
    'model:i-i-s-modul-dlya-chatbota-должность',
    'model:i-i-s-modul-dlya-chatbota-настройка-опр',
    'model:i-i-s-modul-dlya-chatbota-опрос',
    'model:i-i-s-modul-dlya-chatbota-отдел',
    'model:i-i-s-modul-dlya-chatbota-содержание',
    'model:i-i-s-modul-dlya-chatbota-сотрудники',
    'model:i-i-s-modul-dlya-chatbota-список',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
