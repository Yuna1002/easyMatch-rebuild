<script setup>
// import axios from 'axios';
import { useRouter } from 'vue-router';
const router=useRouter()
const signout=()=>{
  document.cookie = "yunaToken=;expires=;";
      alert("token 已清除");
      router.push("/");
}
</script>

<template>
  <div>
    <header class="container">
      <div class="d-flex align-items-center ">
        <h1 class="me-5 flex-shrink-0">後台</h1>
        <nav class="d-flex align-items-center w-100">
          <div class="d-flex gap-2 me-auto">
            <router-link to="/admin/products">產品管理</router-link>
            <router-link to="/admin/products">訂單管理</router-link>
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
