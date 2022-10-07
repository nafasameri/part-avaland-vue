<template>
  <input :type="type" class="btn-active" :value="lable" />
</template>

<script>
export default {
  props: {
    type: String,
    lable: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/_variables.scss";

.btn-active {
  padding: 10px 64px;
  background: linear-gradient(
    106.97deg,
    $primary-color -11.29%,
    $primary-color 91.8%
  );
  border-radius: 8px;
  order: 1;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: $text-color;
  text-align: center;
  border: none;
//   height: 56px;
}
</style>