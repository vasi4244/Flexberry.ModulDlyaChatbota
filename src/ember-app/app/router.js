import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-dlya-chatbota-анкетирование-l');
  this.route('i-i-s-modul-dlya-chatbota-анкетирование-e',
  { path: 'i-i-s-modul-dlya-chatbota-анкетирование-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-анкетирование-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-анкетирование-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-должность-l');
  this.route('i-i-s-modul-dlya-chatbota-должность-e',
  { path: 'i-i-s-modul-dlya-chatbota-должность-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-должность-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-должность-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-настройка-опр-l');
  this.route('i-i-s-modul-dlya-chatbota-настройка-опр-e',
  { path: 'i-i-s-modul-dlya-chatbota-настройка-опр-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-настройка-опр-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-настройка-опр-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-опрос-l');
  this.route('i-i-s-modul-dlya-chatbota-опрос-e',
  { path: 'i-i-s-modul-dlya-chatbota-опрос-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-опрос-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-опрос-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-отдел-l');
  this.route('i-i-s-modul-dlya-chatbota-отдел-e',
  { path: 'i-i-s-modul-dlya-chatbota-отдел-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-отдел-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-отдел-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-сотрудники-l');
  this.route('i-i-s-modul-dlya-chatbota-сотрудники-e',
  { path: 'i-i-s-modul-dlya-chatbota-сотрудники-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-сотрудники-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-сотрудники-e/new' });
});

export default Router;
