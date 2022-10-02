<template>
  <div class="music-card">
    <img :src="require(`@/assets/img/posters/${musicImage}`)" alt="" />
    <div class="music-card__description">
      <div class="music-card__title">
        <router-link to="/music/:id" class="music-card__title">
          <h3 class="music-card__h3">{{ musicName }}</h3>
        </router-link>
        <span class="music-card__span">{{ musicAuthor }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  musicImage: String,
  musicName: String,
  musicAuthor: String,
});
</script>

<style lang="scss" src="@/assets/sass/music.scss" scoped></style>
