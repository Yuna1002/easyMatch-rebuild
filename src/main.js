import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { focus } from './directive/focus';

import '../src/assets/scss/style.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(LoadingPlugin, {
  color: '#70D0C4'
});
app.directive('focus', focus);

app.mount('#app');
