<template>
  <div class="playlist">
    <img :src="require(`@/assets/img/posters/${playlistImage}`)" alt="" />
    <div class="playlist__description">
      <div class="playlist__title">
        <router-link :to="{ path: `/playlists/${plalistId}` }" class="playlist__h3">
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
        <PlaylistOptionModal :styles="display" />
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistOptionModal from "./PlaylistOptionModal.vue";
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

  props: {
    playlistName: String,
    playlistImage: String,
    playlistAuthor: String,
    plalistId:Number
  },
  components: {
    PlaylistOptionModal,
  },
};
</script>

<style lang="scss" src="@/assets/sass/listplaylist.scss"></style>

