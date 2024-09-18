import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '../src/assets/scss/style.scss';
// import 'bootstrap/dist/css/bootstrap.min.css'; //導入所有 Bootstrap 已編譯好的 的 CSS

// import * as bootstrap from 'bootstrap'; ///引入ＢＳ全部的JS

//可單獨匯入 JavaScript 插件，以縮小套件大小
// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';
// import { Modal } from 'bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
