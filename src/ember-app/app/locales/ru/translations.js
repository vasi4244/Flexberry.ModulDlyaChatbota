import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISModul_dlya_chatbotaАнкетированиеLForm from './forms/i-i-s-modul-dlya-chatbota-анкетирование-l';
import IISModul_dlya_chatbotaДолжностьLForm from './forms/i-i-s-modul-dlya-chatbota-должность-l';
import IISModul_dlya_chatbotaНастройкаОпрLForm from './forms/i-i-s-modul-dlya-chatbota-настройка-опр-l';
import IISModul_dlya_chatbotaОпросLForm from './forms/i-i-s-modul-dlya-chatbota-опрос-l';
import IISModul_dlya_chatbotaОтделLForm from './forms/i-i-s-modul-dlya-chatbota-отдел-l';
import IISModul_dlya_chatbotaСотрудникиLForm from './forms/i-i-s-modul-dlya-chatbota-сотрудники-l';
import IISModul_dlya_chatbotaАнкетированиеEForm from './forms/i-i-s-modul-dlya-chatbota-анкетирование-e';
import IISModul_dlya_chatbotaДолжностьEForm from './forms/i-i-s-modul-dlya-chatbota-должность-e';
import IISModul_dlya_chatbotaНастройкаОпрEForm from './forms/i-i-s-modul-dlya-chatbota-настройка-опр-e';
import IISModul_dlya_chatbotaОпросEForm from './forms/i-i-s-modul-dlya-chatbota-опрос-e';
import IISModul_dlya_chatbotaОтделEForm from './forms/i-i-s-modul-dlya-chatbota-отдел-e';
import IISModul_dlya_chatbotaСотрудникиEForm from './forms/i-i-s-modul-dlya-chatbota-сотрудники-e';
import IISModul_dlya_chatbotaАнкетированиеModel from './models/i-i-s-modul-dlya-chatbota-анкетирование';
import IISModul_dlya_chatbotaДолжностьModel from './models/i-i-s-modul-dlya-chatbota-должность';
import IISModul_dlya_chatbotaНастройкаОпрModel from './models/i-i-s-modul-dlya-chatbota-настройка-опр';
import IISModul_dlya_chatbotaОпросModel from './models/i-i-s-modul-dlya-chatbota-опрос';
import IISModul_dlya_chatbotaОтделModel from './models/i-i-s-modul-dlya-chatbota-отдел';
import IISModul_dlya_chatbotaСодержаниеModel from './models/i-i-s-modul-dlya-chatbota-содержание';
import IISModul_dlya_chatbotaСотрудникиModel from './models/i-i-s-modul-dlya-chatbota-сотрудники';
import IISModul_dlya_chatbotaСписокModel from './models/i-i-s-modul-dlya-chatbota-список';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-dlya-chatbota-анкетирование': IISModul_dlya_chatbotaАнкетированиеModel,
    'i-i-s-modul-dlya-chatbota-должность': IISModul_dlya_chatbotaДолжностьModel,
    'i-i-s-modul-dlya-chatbota-настройка-опр': IISModul_dlya_chatbotaНастройкаОпрModel,
    'i-i-s-modul-dlya-chatbota-опрос': IISModul_dlya_chatbotaОпросModel,
    'i-i-s-modul-dlya-chatbota-отдел': IISModul_dlya_chatbotaОтделModel,
    'i-i-s-modul-dlya-chatbota-содержание': IISModul_dlya_chatbotaСодержаниеModel,
    'i-i-s-modul-dlya-chatbota-сотрудники': IISModul_dlya_chatbotaСотрудникиModel,
    'i-i-s-modul-dlya-chatbota-список': IISModul_dlya_chatbotaСписокModel
  },

  'application-name': 'Modul_dlya_chatbota',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Modul_dlya_chatbota',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_dlya_chatbota',
          title: 'Modul_dlya_chatbota'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        кадры: {
          caption: 'Кадры',
          title: 'Кадры',
          'i-i-s-modul-dlya-chatbota-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-отдел-l': {
            caption: 'Отдел',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        'работа-с-чат-ботом': {
          caption: 'Работа с чат-ботом',
          title: 'Работа с чат-ботом',
          'i-i-s-modul-dlya-chatbota-настройка-опр-l': {
            caption: 'Настройка опр',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-опрос-l': {
            caption: 'Опрос',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-анкетирование-l': {
            caption: 'Анкетирование',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-modul-dlya-chatbota-анкетирование-l': IISModul_dlya_chatbotaАнкетированиеLForm,
    'i-i-s-modul-dlya-chatbota-должность-l': IISModul_dlya_chatbotaДолжностьLForm,
    'i-i-s-modul-dlya-chatbota-настройка-опр-l': IISModul_dlya_chatbotaНастройкаОпрLForm,
    'i-i-s-modul-dlya-chatbota-опрос-l': IISModul_dlya_chatbotaОпросLForm,
    'i-i-s-modul-dlya-chatbota-отдел-l': IISModul_dlya_chatbotaОтделLForm,
    'i-i-s-modul-dlya-chatbota-сотрудники-l': IISModul_dlya_chatbotaСотрудникиLForm,
    'i-i-s-modul-dlya-chatbota-анкетирование-e': IISModul_dlya_chatbotaАнкетированиеEForm,
    'i-i-s-modul-dlya-chatbota-должность-e': IISModul_dlya_chatbotaДолжностьEForm,
    'i-i-s-modul-dlya-chatbota-настройка-опр-e': IISModul_dlya_chatbotaНастройкаОпрEForm,
    'i-i-s-modul-dlya-chatbota-опрос-e': IISModul_dlya_chatbotaОпросEForm,
    'i-i-s-modul-dlya-chatbota-отдел-e': IISModul_dlya_chatbotaОтделEForm,
    'i-i-s-modul-dlya-chatbota-сотрудники-e': IISModul_dlya_chatbotaСотрудникиEForm
  },

});

export default translations;
