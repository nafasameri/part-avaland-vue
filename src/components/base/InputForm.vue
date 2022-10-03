<template>
  <input :type="type" :id="id" :name="name" :v-model="name" :placeholder="name" />
</template>

<script>
export default {
  props: {
    type: String,
    id: String,
    class: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

input {
  padding: 8px;
  color: $secondry-color;
  background: rgba(70, 70, 70, 0.3);
  border-radius: 16px;
  width: 99% !important;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  width: auto;
  border: none;
}
</style>