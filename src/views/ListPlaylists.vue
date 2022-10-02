<template>
  <main class="content">
    <h1>لیست های پخش</h1>
    <section class="playlists">
      <PlaylistCard
        v-for="item in playlists"
        :key="item.name"
        :playlist-name="item.name"
        :playlist-image="item.image"
        :playlist-author="item.author"
      />
    </section>
  </main>
</template>

<script>
import PlaylistCard from "../components/PlaylistCard.vue";
export default {
  data() {
    return {
      playlists: [
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
        {
          image: "Rectangle 14.svg",
          name: "لیست پخش۳",
          author: "ایجاد شده توسط مصطفی",
        },
      ],
    };
  },
  components: {
    PlaylistCard,
  },
};
</script>

<style lang="scss" src="@/assets/sass/listplaylist.scss"></style>