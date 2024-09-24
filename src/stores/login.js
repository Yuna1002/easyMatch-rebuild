import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
const { VITE_APP_URL } = import.meta.env;

export const useLoginStore = defineStore('login', () => {
  const isloading = ref(false);

  //登入
  const signIn = async (user) => {
    isloading.value = true;
    const data = user;
    try {
      const res = await axios.post(`${VITE_APP_URL}/admin/signin`, data);
      // 取出token、expired到期日 儲存在cookie
      const { token, expired } = res.data;
      document.cookie = `yunaToken=${token}; expires=${new Date(expired)}`;
      isloading.value = false;
      return true;
    } catch (err) {
      isloading.value = false;
      alert(err.response.data.message);
    }
  };

  //驗證
  const checkLogIn = async () => {
    isloading.value = true;
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)yunaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    //將token放置hearders
    axios.defaults.headers.common['Authorization'] = token;
    try {
      await axios.post(`${VITE_APP_URL}/api/user/check`);
      isloading.value = false;
      return true;
    } catch (err) {
      isloading.value = false;
      console.error(err);
      return false
    }
  };

  return {
    isloading,
    signIn,
    checkLogIn
  };
});
