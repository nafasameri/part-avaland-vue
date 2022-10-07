<template>
  <div class="option-modal" :style="{ display: styles }">
    <div class="option-modal__trash">
      <img src="../assets/img/icon/outline/trash.svg" alt="" />
      حذف
    </div>
    <div class="option-modal__edit">
      <img src="../assets/img/icon/outline/edit.svg" alt="" />
      اضافه کردن به لیست پخش
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styles: String,
  },
};
</script>

<style lang="scss" src="@/assets/sass/music-modals.scss"></style>
