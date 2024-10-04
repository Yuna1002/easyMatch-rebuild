<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

const modal = ref(null);
const myModal = ref(null);

defineProps({
  typeModal: {
    type: String,
    default: 'add'
  },
  addProduct: {
    type: Function
  },
  editProduct: {
    type: Function
  },
  delProduct: {
    type: Function
  }
});

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
        <div class="modal-header text-white" :class="{ 'bg-danger': typeModal === 'del', 'bg-dark': typeModal === 'add' || typeModal === 'edit' }">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="typeModal === 'add'">新增產品</span>
            <span v-if="typeModal === 'edit'">編輯產品</span>
            <span v-if="typeModal === 'del'">刪除產品</span>
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- 不同內容 -->
        <slot></slot>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-light-100" data-bs-dismiss="modal">取消</button>
          <button v-if="typeModal === 'add'" type="button" class="btn btn-primary text-white" @click="addProduct">確認</button>
          <button v-if="typeModal === 'edit'" type="button" class="btn btn-primary text-white" @click="editProduct">確認</button>
          <button v-if="typeModal === 'del'" type="button" class="btn btn-danger text-white" @click="delProduct">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>
