<script setup></script>

<template>
  <div class="bg-secondary">
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
  </div>
</template>

<style scoped>
main {
  height: 100vh;
}
</style>
