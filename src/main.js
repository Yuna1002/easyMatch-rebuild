import '../src/assets/scss/style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// [VeeValidate]
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
// 將所有驗證規則引入並加入
import { all } from '@vee-validate/rules';
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});
// 引入 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 i18n 的繁體中文語系-錯誤訊息檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 將當前語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW })
  // validateOnInput: true //輸入文字時，就立即進行驗證
});
setLocale('zh_TW');

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
