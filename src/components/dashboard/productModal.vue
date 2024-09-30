<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

const modal = ref(null);
const myModal = ref(null);

const props = defineProps({
  addProduct: {
    type: Function
  }
});

const tempProduct = defineModel();

const show = () => {
  myModal.value.show();
};
const hide = () => {
  myModal.value.hide();
};

onMounted(() => {
  myModal.value = new Modal(modal.value);
});

defineExpose({
  show,
  hide
});
</script>

<template>
  <div ref="modal" id="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- 不同內容 -->
        <slot></slot>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-light-100" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary text-white" @click="addProduct(tempProduct)">確認</button>
          <!-- <button type="button" class="btn btn-primary" v-if="isNew" @click="$emit('addProduct', tempProduct)">確認</button>
          <button type="button" class="btn btn-primary" v-else @click="$emit('editProduct', tempProduct.id, tempProduct)">確認</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
