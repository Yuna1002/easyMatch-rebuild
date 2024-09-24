<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/login.js';
import { storeToRefs } from 'pinia';

const router = useRouter();
const store = useLoginStore();
const { isloading } = storeToRefs(store);
const { signIn } = store;

const user = ref({
  username: '',
  password: ''
});

const handleLogin = async () => {
  const success = await signIn(user.value);
  if (success) {
    router.push('/admin/products');
  }
};
</script>

<template>
  <main class="bg-gradient d-flex justify-content-center align-items-center">
    <form class="bg-light px-22 py-15 rounded-3 shadow d-flex flex-column align-items-center" @submit.prevent="handleLogin">
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
