<template>
  <div class="playlist">
    <img :src="require(`@/assets/img/posters/${playlistImage}`)" alt="" />
    <div class="playlist__description">
      <div class="playlist__title">
        <router-link to="/playlists/:id" class="playlist__h3">
          <h3 class="playlist__h3">{{ playlistName }}</h3>
        </router-link>
        <span class="playlist__span">{{ playlistAuthor }}</span>
      </div>

      <div class="playlist__option" @click="showModal">
        <img
          src="../assets/img/icon/bold/more.svg"
          alt=""
          class="playlist__icon-more"
        />
        <PlaylistOptionModal :styles="count" />
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistOptionModal from "./PlaylistOptionModal.vue";
export default {
  data() {
    return {
      count: "none",
    };
  },
  methods: {
    showModal() {
      if (this.count == "none") {
        this.count = "block";
      } else {
        this.count = "none";
      }
    },
  },

  props: {
    playlistName: String,
    playlistImage: String,
    playlistAuthor: String,
  },
  components: {
    PlaylistOptionModal,
  },
};
</script>

<style lang="scss" >
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;
.playlist {
  max-width: 23%;
  img {
    max-width: 100%;
  }
  &__description {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__h3 {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  &__span {
    color: $secondry-color;
  }
  &__icon-more {
    rotate: 90deg;
  }
  &__option {
    position: relative;
  }
}
</style>
