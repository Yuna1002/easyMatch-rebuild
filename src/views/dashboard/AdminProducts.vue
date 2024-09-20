<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
const { VITE_APP_URL } = import.meta.env;
const router = useRouter();

const checkLogIn = async () => {
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
checkLogIn();
</script>

<template>
  <div>產品管理</div>
</template>
