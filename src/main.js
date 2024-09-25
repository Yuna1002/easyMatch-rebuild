import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { focus } from './directive/focus';

import App from './App.vue';
import router from './router';

import '../src/assets/scss/style.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive('focus', focus);

app.mount('#app');
