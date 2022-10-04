<template>
  <div class="selected-musics">
    <div class="selected-musics__header">
      <h2 class="selected-musics__title">لیست پخش منتخب</h2>
      <span class="selected-musics__more"> مشاهده همه </span>
    </div>

    <div class="selected-musics__list">
      <MusicCard
        v-for="item in musics"
        :key="item.name"
        :music-name="item.name"
        :music-image="item.img"
        :music-author="item.creator"
        :music-id="item[music-id]"
      />
    </div>
  </div>
</template>

<script >
import MusicCard from "../components/MusicCard.vue";
import {mapActions,mapState} from "vuex"
export default{
  computed: {
    ...mapState("playlist", ["playlists"]),
  },
  methods: {
    ...mapActions("playlist", ["get"]),
  },
  mounted(){
    this.get()
    console.log(this.playlists);
  },
  components:{
    MusicCard
  }
}
</script>

<style lang="scss" src="@/assets/sass/selected-playlist.scss"></style>
