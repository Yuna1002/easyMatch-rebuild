<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import productModal from '@/components/dashboard/productModal.vue';
import updateContent from '@/components/dashboard/updateContent.vue';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

const products = ref([]);
const typeModel = ref('');
const tempProduct = ref({});

const updateModal = ref(null);
const delModal = ref(null);
const contentProduct = ref(null);

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
const addProduct = async () => {
  //console.log('取出子層資料', contentProduct.value.tempProduct);
  const data = contentProduct.value.tempProduct;
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
const delProduct = async () => {
  //console.log('刪除單筆資料', tempProduct.value);
  const id = tempProduct.value.id;
  try {
    const res = await axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${id}`);
    alert(res.data.message);
    delModal.value.hide();
    getProducts();
  } catch (err) {
    console.log(err.response.data.message);
  }
};

const openModal = (type, product) => {
  if (type === 'add') {
    typeModel.value = type;
    updateModal.value.show();
  } else if (type === 'del') {
    typeModel.value = type;
    tempProduct.value = product;
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
            <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('del', product)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <productModal ref="updateModal" :type-model="typeModel" :add-product="addProduct"><updateContent ref="contentProduct" /></productModal>
  <productModal ref="delModal" :type-model="typeModel" :del-product="delProduct">
    <div class="modal-body">
      確定刪除
      <strong class="text-danger">{{ tempProduct.title }}</strong>
      商品(刪除後將無法恢復)。
    </div>
  </productModal>
  <!-- <ProductModal ref="productModal" :is-new="isNew" :edit-item="editItem" @add-product="addProduct" @edit-product="editProduct"></ProductModal> -->
  <!-- <PaginationCpmponent
    :pages="pages"
    @get-data="getProducts"
  ></PaginationCpmponent> -->
</template>
