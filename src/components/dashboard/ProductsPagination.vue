<script setup>
defineProps({
  getProducts: {
    type: Function
  },
  pages: {
    type: Object
  }
});
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 -->
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- 頁數 -->
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ active: page === pages.current_page }">
        <!-- 當前頁不可點擊 -->
        <span class="page-link" v-if="page === pages.current_page">{{ page }}</span>
        <a class="page-link" href="#" v-else @click.prevent="getProducts(page)">{{ page }}</a>
      </li>
      <!-- 下一頁 -->
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
