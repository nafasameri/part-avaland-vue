<template>
  <div class="latest-musics">
    <div class="latest-musics__header">
      <h2 class="latest-musics__title">جدید ترین اهنگ های این هفته</h2>
      <span class="latest-musics__more"> مشاهده همه </span>
    </div>

    <div class="latest-musics__list">
      <MusicCard
        v-for="item in musics"
        :key="item.name"
        :music-name="item.name"
        :music-image="item.img"
        :music-author="item.creator"
      />
    </div>
  </div>
</template>

<script >
import MusicCard from "../components/MusicCard.vue";
import { mapState, mapActions } from "vuex";

export default {
 
  computed: {
    ...mapState("music", ["musics"]),
  },
  methods: {
    ...mapActions("music", ["get"]),
  },
  mounted(){
    this.get()
    console.log(this.musics);
  },

  components:{
    MusicCard
  }
};
</script>

<style lang="scss" src="@/assets/sass/latest-musics.scss"></style>
