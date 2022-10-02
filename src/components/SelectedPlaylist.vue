<template>
  <div class="selected-musics">
    <div class="selected-musics__header">
      <h2 class="selected-musics__title">لیست پخش منتخب</h2>
      <span class="selected-musics__more"> مشاهده همه </span>
    </div>

    <div class="selected-musics__list">
      <MusicCard
        v-for="item in musics"
        :key="item.name"
        :music-name="item.name"
        :music-image="item.image"
        :music-author="item.author"
      />
    </div>
  </div>
</template>

<script setup>
import MusicCard from "../components/MusicCard.vue";

const musics = [
  {
    image: "Rectangle 14.svg",
    name: "لیست پخش۳",
    author: "بطری",
  },
  {
    image: "Rectangle 14.svg",
    name: "لیست پخش۳",
    author: "باطل",
  },
  {
    image: "Rectangle 14.svg",
    name: "لیست پخش۳",
    author: "دستبند",
  },
  {
    image: "Rectangle 14.svg",
    name: "لیست پخش۳",
    author: "ایحام",
  },
  {
    image: "Rectangle 14.svg",
    name: "لیست پخش۳",
    author: "بی معرفت",
  },
];
</script>

<style lang="scss" src="@/assets/sass/selected-playlist.scss"></style>
