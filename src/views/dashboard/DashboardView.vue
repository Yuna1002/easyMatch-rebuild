<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
const { VITE_APP_URL } = import.meta.env;
const router = useRouter();

//登入驗證
const checkLogIn = async () => {
  //從cookie裡取得token
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)yunaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  //將token放置hearders
  axios.defaults.headers.common['Authorization'] = token;
  try {
    await axios.post(`${VITE_APP_URL}/api/user/check`);
  } catch (err) {
    alert(err.response.data.message);
    router.push('/login');
  }
};

//登出
const signout = () => {
  document.cookie = 'yunaToken=;expires=;';
  alert('token 已清除');
  router.push('/');
};

checkLogIn();
</script>

<template>
  <div>
    <header class="container">
      <div class="d-flex align-items-center">
        <h1 class="me-5 flex-shrink-0">後台</h1>
        <nav class="d-flex align-items-center w-100">
          <div class="d-flex gap-2 me-auto">
            <router-link to="/admin/products">產品管理</router-link>
            <router-link to="/admin/orders">訂單管理</router-link>
          </div>
          <div class="d-flex align-items-center gap-2">
            <router-link to="/">返回前台</router-link>
            <button type="button" class="btn btn-primary text-white" @click.prevent="signout()">登出</button>
          </div>
        </nav>
      </div>
    </header>
    <hr />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>
