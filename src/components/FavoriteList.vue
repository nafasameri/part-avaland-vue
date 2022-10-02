<template>
  <div class="favorite-list">
    <div class="history-list__item" v-for="item in musics" :key="item.id">
      <img
        :src="require(`@/assets/img/posters/${item.image}`)"
        alt="{{item.name}}"
      />
      <div>
        <div class="history-list__item-name">{{ item.name }}</div>
        <span class="history-list__item-likes">
          <img src="../assets/img/icon/bold/heart.svg" alt="" />
          {{ item.likes }}
        </span>
        <span class="history-list__item-plays">
          <img src="../assets/img/icon/bold/play.svg" alt="" />
          {{ item.plays }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const musics = [
  {
    image: "Rectangle-8.png",
    name: "باطل ",
    likes: "1,234",
    plays: "1,454",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,234",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,2",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,2344",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل ",
    likes: "1,234",
    plays: "1,454",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,234",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,2",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,2344",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل ",
    likes: "1,234",
    plays: "1,454",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,234",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,2",
    plays: "1,45",
  },
  {
    image: "Rectangle-8.png",
    name: "باطل",
    likes: "1,2344",
    plays: "1,45",
  },
];
</script>

<style lang="scss" src="@/assets/sass/main-page.scss"></style>
