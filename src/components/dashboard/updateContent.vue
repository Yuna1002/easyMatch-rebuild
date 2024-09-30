<script setup>
import { ref } from 'vue';
const tempProduct = defineModel();
</script>
<template>
  <div class="modal-body">
    <div class="row">
      <div class="col-sm-4">
        <div class="mb-5">
          <h4>主圖</h4>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl" />
            <!-- <input type="file" @change="upload" ref="fileInput" /> -->
          </div>
          <!-- <img class="img-fluid" :src="tempProduct.imageUrl" alt="tempProduct.title" /> -->
        </div>
        <!-- 多圖新增 -->
      </div>
      <div class="col-sm-8">
        <div class="mb-3">
          <label for="title" class="form-label">標題</label>
          <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title" />
        </div>

        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="category" class="form-label">分類</label>
            <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="tempProduct.category" />
          </div>
          <div class="mb-3 col-md-6">
            <label for="price" class="form-label">單位</label>
            <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit" />
          </div>
        </div>

        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="origin_price" class="form-label">原價</label>
            <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model.number="tempProduct.origin_price" />
          </div>
          <div class="mb-3 col-md-6">
            <label for="price" class="form-label">特價</label>
            <input id="price" type="number" min="0" class="form-control" placeholder="請輸入特價" v-model.number="tempProduct.price" />
          </div>
        </div>
        <hr />
        <div class="mb-3">
          <label for="description" class="form-label">產品簡述</label>
          <textarea id="description" type="text" class="form-control" placeholder="請輸入產品簡述" v-model="tempProduct.description"> </textarea>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">詳細內容</label>
          <textarea id="description" type="text" class="form-control" placeholder="請輸入詳細內容" v-model="tempProduct.content"> </textarea>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="tempProduct.is_enabled" />
            <label class="form-check-label" for="is_enabled">是否啟用</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
