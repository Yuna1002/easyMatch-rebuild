<script setup>
import { ref } from 'vue';
import axios from 'axios';
const { VITE_APP_URL } = import.meta.env;
const user = ref({
  username: '',
  password: ''
});
const signIn = async () => {
  const data = {
    username: user.value.username,
    password: user.value.password
  };
  try {
    const res = await axios.post(`${VITE_APP_URL}/admin/signin`, data);
    console.log(res.data);
  } catch (err) {
    console.error(err.response.data.message);
  }
};
</script>

<template>
  <main class="bg-gradient d-flex justify-content-center align-items-center">
    <form class="bg-light px-22 py-15 rounded-3 shadow d-flex flex-column align-items-center" @submit.prevent="signIn">
      <img src="../assets/images/pill_signIn.webp" class="mb-6" alt="logo圖示" width="72" height="72" />
      <h1 class="fs-9 mb-17" style="font-family: 'Josefin Sans'">SIGN IN</h1>
      <div class="form-floating mb-5">
        <input type="email" class="form-control border-0" id="email" placeholder="E-mail" v-model="user.username" />
        <label for="email" class="text-light-emphasis">E-mail</label>
      </div>
      <div class="form-floating mb-17">
        <input type="password" class="form-control border-0" id="password" placeholder="Password" v-model="user.password" />
        <label for="password" class="text-light-emphasis">Password</label>
      </div>
      <button type="submit" class="btn btn-primary text-white rounded-pill py-2 mb-3" style="font-family: 'Josefin Sans'">SIGN IN</button>
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
button {
  min-width: 180px;
}
</style>
