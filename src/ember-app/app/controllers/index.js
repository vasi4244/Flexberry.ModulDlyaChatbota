import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадры.caption'),
          title: i18n.t('forms.application.sitemap.кадры.title'),
          children: [{
            link: 'i-i-s-modul-dlya-chatbota-должность-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-должность-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-отдел-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-отдел-l.title'),
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-сотрудники-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.caption'),
          title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.title'),
          children: [{
            link: 'i-i-s-modul-dlya-chatbota-настройка-опр-l',
            caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-настройка-опр-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-настройка-опр-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-опрос-l',
            caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-опрос-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-опрос-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-анкетирование-l',
            caption: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-анкетирование-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-чат-ботом.i-i-s-modul-dlya-chatbota-анкетирование-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})