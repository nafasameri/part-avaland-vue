<template>
  <div class="switch">
    <button
      class="switch__favorite"
      @click="$emit('someEvent'), switched()"
      :style="{
        backgroundColor: value.active ? 'orange' : 'inherit',
        borderRadius: value.active ? '16px' : '0',
      }"
    >
      تاریخچه پخش
    </button>
    <button
      class="switch__history"
      @click="switched()"
      :style="{
        backgroundColor: value.active ? 'inherit' : 'orange',
        borderRadius: !value.active ? '16px' : '0',
      }"
    >
      محبوب ترین اهنگ ها
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const value = reactive({ active: true });

function switched() {
  value.active = !value.active;
}
</script>

<style lang="scss" src="@/assets/sass/main-page.scss"></style>
