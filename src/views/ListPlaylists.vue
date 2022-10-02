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

<style >
.playlists {
  display: flex;
  flex-wrap: wrap;
  padding: 24px 32px;
  gap:1em;
  background-color: rgba(70, 70, 70, 0.4);
  border-radius: 16px;
}
h1 {
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
}

template {
  display: inline;
}

.more-icon {
  rotate: 90deg;
}
</style>
