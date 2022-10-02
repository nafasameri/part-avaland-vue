<template>
  <div class="history-list">
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

<style lang="scss">
.history-list {
  background-color: rgba(70, 70, 70, 0.4);
  width: 20vw;
  aspect-ratio: 1 / 2;
   overflow: scroll;
  padding: 1em;
  border-radius: 12px;
  &__item {
    margin: 10px 0;
    color: white;
    display: flex;
    align-items: center;
  }
  &__item-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 0.5em;
  }
  &__item-likes {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgba(153, 153, 153, 1);
    margin: 1em;
  }
  &__item-plays {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgba(153, 153, 153, 1);
    margin: 1em;
  }
}
</style>
