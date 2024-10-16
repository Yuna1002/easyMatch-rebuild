import * as yup from 'yup';

// 自定義錯誤訊息
yup.setLocale({
  mixed: {
    required: '${label} 為必填'
  },
  string: {
    email: '信箱 格式錯誤 你看他有吃到我自定義！！',
    min: '${label} 最少${min}位數'
  }
});

//使用 yup來定義驗證規則
const schema = yup.object({
  email: yup.string().label('信箱').required().email(),
  password: yup.string().label('密碼').required().min(8, '最少8位 你高興也可在這加錯誤提示')
});

const modules = { schema };

export default modules;
