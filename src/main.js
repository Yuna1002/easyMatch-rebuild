import '../src/assets/scss/style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { Form, Field, ErrorMessage } from 'vee-validate';

import { focus } from './directive/focus';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(LoadingPlugin, {
  color: '#70D0C4'
});

//掛載 VeeValidate 元件
app.component('VForm', Form).component('VField', Field).component('ErrorMessage', ErrorMessage);

app.directive('focus', focus);

app.mount('#app');
