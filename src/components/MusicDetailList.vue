<template>
  <section class="playlist">
    <div class="playlist__title">محبوب‌ترین‌ها از همین خواننده</div>
    <div class="playlist__content">
      <img
        src="../assets/img/Group-5573.png"
        alt=""
        class="playlist__arrow-right"
      />
      <div class="playlist__list">
        <div
          class="playlist__item"
          v-for="(music, index) in musics"
          :key="index"
        >
          <img
            :src="require(`../assets/img/${music.poster}`)"
            alt=""
            class="playlist__img"
          />
          <div class="playlist__music-info">
            <p class="playlist__music-name">{{ music.name }}</p>
            <img
              src="../assets/img/icon/bold/more.svg"
              alt=""
              class="more-icon"
            />
          </div>
        </div>
      </div>
      <img
        src="../assets/img/Group-5572.png"
        alt=""
        class="playlist__arrow-left"
      />
    </div>
  </section>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("music", ["musics"]),
  },
  methods: {
    ...mapActions("music", ["get"]),
  },
};
</script>


<style lang="scss" src="@/assets/sass/music-details.scss"></style>
