<template>
  <main class="content">
    <h1>لیست های پخش</h1>
    <section class="playlists">
      <PlaylistCard
        v-for="item in playlists"
        :key="item[playlist-id]"
        :playlist-name="item.name"
        :playlist-image="item.img"
        :playlist-author="item.creator"
      />
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PlaylistCard from "../components/PlaylistCard.vue";
export default {
  data() {
    return {
      
    };
  },
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
  components: {
    PlaylistCard,
  },
};
</script>

<style lang="scss" src="@/assets/sass/listplaylist.scss"></style>