<template>
  <section class="poster">
    <figure>
      <div class="poster__imageplay">
        <img src="../assets/img/profile1.jpg" class="poster__image" />
        <img
          src="../assets/img/icon/bold/play.png"
          alt=""
          class="poster__btn-play"
        />
      </div>
    </figure>
    <div class="poster__desc">
      <div class="poster__tag">لیست پخش</div>
      <h2 class="poster__title">گلچین شاد مجلسی آخر هفته ها</h2>
      <div class="poster__detail">
        <img src="../assets/img/icon/linear/music-filter.svg" />
        <span>۱۲۰ ترانه </span>
        <span class="poster__seperator">|</span>
        <img src="../assets/img/icon/linear/clock.svg" />
        <span>۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه</span>
      </div>
      <div class="poster__buttons">
        <img src="../assets/img/icon/linear/heart.svg" alt="" />
        <img src="../assets/img/icon/linear/share.svg" alt="" />
        <div @click="showModal" class="poster__more">
          <img
            src="../assets/img/icon/bold/more.svg"
            alt=""
            class="poster__btn-more"
          />
          <PlaylistOptionModal :styles="display" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlaylistOptionModal from "../components/PlaylistOptionModal.vue";
export default {
  data() {
    return {
      display: "none",
    };
  },
  methods: {
    showModal() {
      if (this.display == "none") {
        this.display = "block";
      } else {
        this.display = "none";
      }
    },
  },

  components: {
    PlaylistOptionModal,
  },
};
</script>

<style lang="scss" src="@/assets/sass/listplaylist.scss"></style>
