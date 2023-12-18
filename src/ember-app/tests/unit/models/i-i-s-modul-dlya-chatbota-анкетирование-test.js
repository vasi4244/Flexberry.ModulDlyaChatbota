import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-dlya-chatbota-анкетирование', 'Unit | Model | i-i-s-modul-dlya-chatbota-анкетирование', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
