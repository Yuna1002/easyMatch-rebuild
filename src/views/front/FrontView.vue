<script setup></script>

<template>
  <header>
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/products">所有產品</router-link>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
}
</style>
