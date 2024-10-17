<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/login.js';
import { storeToRefs } from 'pinia';
// import validate from '@/plugins/validate.js';
// // 使用封装好的 schema
// const { schema } = validate;

const router = useRouter();
const store = useLoginStore();
const { isloading } = storeToRefs(store);
const { signIn } = store;

// const user = ref({
//   username: '',
//   password: ''
// });

// const handleLogin = async () => {
//   const success = await signIn(user.value);
//   if (success) {
//     router.push('/admin/products');
//   }
// };

import { useForm, configure } from 'vee-validate';

configure({
  validateOnBlur: true
});
import * as yup from 'yup';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 自定義錯誤訊息
yup.setLocale({
  mixed: {
    required: '${label} 為必填'
  },
  string: {
    email: '${label} 格式有誤',
    min: '${label} 最少${min}位數'
  }
});

const schema = yup.object({
  email: yup.string().label('信箱').required().matches(emailRegex, '信箱 格式有誤'),
  password: yup.string().label('密碼').required().min(8)
});

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema
});

// const [username] = defineField('email');
// const [password] = defineField('password');
const [email, emailAttrs] = defineField('email', {});

const handleLogin = handleSubmit((data, { resetForm }) => {
  console.log('success', data);
  resetForm();
});
// const handleLogin = () => {
//   console.log(123);
// };
</script>

<template>
  <main class="bg-gradient d-flex justify-content-center align-items-center">
    <form class="bg-light px-22 py-15 rounded-3 shadow d-flex flex-column align-items-center" @submit.prevent="handleLogin">
      <img src="../assets/images/pill_signIn.webp" class="mb-6" alt="logo圖示" width="72" height="72" />
      <h1 class="fs-9 mb-17" style="font-family: 'Josefin Sans'">SIGN IN</h1>
      <div class="form-floating mb-5">
        <input
          type="email"
          class="form-control border-0"
          :class="{ 'is-invalid': errors['email'] }"
          id="email"
          placeholder="E-mail"
          v-model="email"
          v-bind="emailAttrs"
          autocomplete="username"
        />
        <label for="email" class="text-light-emphasis">E-mail</label>
        <p class="invalid-feedback">{{ errors.email }}</p>
      </div>
      <!-- <div class="form-floating mb-17">
        <input
          type="password"
          class="form-control border-0"
          id="password"
          placeholder="Password"
          v-model="password"
          :class="{ 'is-invalid': errors['password'] }"
          autocomplete="current-password"
        />
        <label for="password" class="text-light-emphasis">Password</label>
        <p class="invalid-feedback">{{ errors.password }}</p>
      </div> -->
      <button
        type="submit"
        class="btn btn-primary text-white rounded-pill py-2 mb-3 d-flex align-items-center justify-content-center"
        style="font-family: 'Josefin Sans'"
      >
        <span class="me-1">SIGN IN</span>
        <div class="spinner-border" style="width: 1rem; height: 1rem" role="status" v-if="isloading">
          <span class="visually-hidden">Loading...</span>
        </div>
      </button>
      <router-link to="/" class="fs-3">返回首頁</router-link>
    </form>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 100vh;
}
input {
  min-width: 280px;
}
form button {
  min-width: 180px;
}
</style>
