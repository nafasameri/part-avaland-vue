<template>
  <aside class="sidebar">
    <img src="../assets/logo.png" alt="" />

    <div class="nav">
      <router-link :to="menu.link"  v-for="(menu, index) in menus" :key="index" class="nav__item">
          <p class="nav__desc">{{ menu.name }}</p>

          <img
            :src="require(`../assets/img/${menu.icon}`)"
            alt=""
            class="nav__icon"
          />
      </router-link>
    </div>
  </aside>
</template>

<script setup>
const menus = [
  {
    name: "صفحه اصلی",
    icon: "icon/linear/home-2.svg",
    link: "/",
  },
  {
    name: "جستجو",
    icon: "icon/linear/discover.svg",
    link: "/search",
  },
  {
    name: "پخش آهنگ",
    icon: "icon/linear/play.svg",
    link: "/playmusic",
  },
  {
    name: "محبوب ترین ها",
    icon: "icon/linear/heart.svg",
    link: "/favorites",
  },
  {
    name: "لیست پخش منتخب",
    icon: "icon/linear/receipt-square.svg",
    link: "/playlists",
  },
  {
    name: "آپلود آهنگ",
    icon: "icon/linear/frame.svg",
    link: "/upload",
  },
];
</script>

<style lang="scss" src="@/assets/sass/sidebar.scss"></style>
