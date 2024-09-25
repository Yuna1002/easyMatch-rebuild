<script setup>
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/login.js';
import { storeToRefs } from 'pinia';

const router = useRouter();
const store = useLoginStore();
const { isloading } = storeToRefs(store);
const { checkLogIn } = store;

const handleCheckLogIn = async () => {
  const success = await checkLogIn();
  if (success) {
    router.push('/admin/products');
  } else {
    router.push('/login');
  }
};
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1>首頁</h1>

    <button type="button" class="btn btn-primary text-white" @click.prevent="handleCheckLogIn">
      <span class="me-1">登入後台</span>
      <div class="spinner-border" style="width: 1rem; height: 1rem" role="status" v-if="isloading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
