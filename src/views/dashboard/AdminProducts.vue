<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import productModal from '@/components/dashboard/productModal.vue';
import updateContent from '@/components/dashboard/updateContent.vue';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

const products = ref([]);
const tempProduct = ref({});
const updateModal = ref(null);
const delModal = ref(null);

//取得所有產品
const getProducts = async () => {
  try {
    const res = await axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products`);
    products.value = res.data.products;
  } catch (err) {
    console.log('api', err);
  }
};
//新增產品
const addProduct = async (data) => {
  try {
    const res = await axios.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`, { data });
    alert(res.data.message);
    updateModal.value.hide();
    getProducts();
  } catch (err) {
    console.log(err.response.data.message);
  }
};
//刪除產品
const delProduct = async (id) => {
  try {
    const res = await axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${id}`);
  } catch (error) {
    console.log(err.response.data.message);
  }
};

const openModal = (type) => {
  if (type === 'add') {
    updateModal.value.show();
  } else if (type === 'del') {
    delModal.value.show();
  }
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="text-end mt-4">
    <button class="btn btn-primary text-white" @click="openModal('add')">建立新的產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="150">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.origin_price }}</td>
        <td>{{ product.price }}</td>
        <td>
          <span class="text-success" v-if="product.is_enabled">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm">
              <!-- @click="openModal('edit', product)" -->
              編輯
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('del')">
              <!-- @click="openModal('del', product)" -->
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <productModal ref="updateModal" :add-product="addProduct" v-model="tempProduct"><updateContent v-model="tempProduct" /></productModal>
  <productModal ref="delModal"> 這是刪除modal </productModal>
  <!-- <ProductModal ref="productModal" :is-new="isNew" :edit-item="editItem" @add-product="addProduct" @edit-product="editProduct"></ProductModal> -->
  <!-- <DelModal ref="delProductModal" :temp="editItem" @del="delProduct"></DelModal> -->
  <!-- <PaginationCpmponent
    :pages="pages"
    @get-data="getProducts"
  ></PaginationCpmponent> -->
</template>
