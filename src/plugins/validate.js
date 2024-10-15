import * as veeValidate from 'vee-validate';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';

//將所有驗證規則引入並加入
import { all } from '@vee-validate/rules';
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});
//引入 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 i18n 的繁體中文語系-錯誤訊息檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 將當前語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW })
  // validateOnInput: true //輸入文字時，就立即進行驗證
});
setLocale('zh_TW');

import * as yup from 'yup';
const sh = yup.setLocale({
  mixed: {
    required: '${label} 為必填'
  },
  string: {
    email: '信箱 格式错误',
    min: '${label} 最少${min}位數'
  }
});
const schema = yup.object({
  email: yup.string().label('電子郵件').required().email(),
  password: yup.string().label('密碼').required().min(8)
});

const modules = { schema, sh, ...veeValidate };

export default modules;
