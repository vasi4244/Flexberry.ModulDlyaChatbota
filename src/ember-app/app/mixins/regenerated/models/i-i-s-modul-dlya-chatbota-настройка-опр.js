import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  опрос: DS.belongsTo('i-i-s-modul-dlya-chatbota-опрос', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-modul-dlya-chatbota-сотрудники', { inverse: null, async: false }),
  содержание: DS.hasMany('i-i-s-modul-dlya-chatbota-содержание', { inverse: 'настройкаОпр', async: false })
});

export let ValidationRules = {
  опрос: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-настройка-опр.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-настройка-опр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-настройка-опр.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройкаОпрE', 'i-i-s-modul-dlya-chatbota-настройка-опр', {
    опрос: belongsTo('i-i-s-modul-dlya-chatbota-опрос', 'Опрос', {
      название: attr('Название', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'название' }),
    сотрудники: belongsTo('i-i-s-modul-dlya-chatbota-сотрудники', 'Сотрудники', {
      фамилия: attr('Ответственный', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    содержание: hasMany('i-i-s-modul-dlya-chatbota-содержание', 'Содержание', {
      вопрос: attr('Вопрос', { index: 0 }),
      вариант_1: attr('Вариант_1', { index: 1 }),
      вариант_2: attr('Вариант_2', { index: 2 }),
      вариант_3: attr('Вариант_3', { index: 3 })
    })
  });

  modelClass.defineProjection('НастройкаОпрL', 'i-i-s-modul-dlya-chatbota-настройка-опр', {
    опрос: belongsTo('i-i-s-modul-dlya-chatbota-опрос', 'Название', {
      название: attr('Название', { index: 0 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-modul-dlya-chatbota-сотрудники', 'Ответственный', {
      фамилия: attr('Ответственный', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
