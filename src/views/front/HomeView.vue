<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { VITE_APP_URL } = import.meta.env;
const router = useRouter();
const isloading = ref(false);

//登入驗證
const checkLogIn = async () => {
  isloading.value = true;
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)yunaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  //將token放置hearders
  axios.defaults.headers.common['Authorization'] = token;
  try {
    await axios.post(`${VITE_APP_URL}/api/user/check`);
    router.push('/admin/products');
  } catch (err) {
    router.push('/login');
  }
};
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1>首頁</h1>

    <button type="button" class="btn btn-primary text-white" @click.prevent="checkLogIn">
      <span class="me-1">登入後台</span>
      <div class="spinner-border" style="width: 1rem; height: 1rem" role="status" v-if="isloading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
