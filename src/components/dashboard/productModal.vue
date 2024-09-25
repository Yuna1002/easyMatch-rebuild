<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

const modal = ref(null);
const myModal = ref(null);

const show = () => {
  myModal.value.show();
};

onMounted(() => {
  myModal.value = new Modal(modal.value);
});

defineExpose({
  show
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
      </div>
    </div>
  </div>
</template>
