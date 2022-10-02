<template>
  <SidebarNavigation />
  <div class="container">
    <SearchboxHeader />
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
  <PlayerContent />
</template>

<script>
import SearchboxHeader from "../components/SearchboxHeader.vue";
import SidebarNavigation from "./SidebarNavigation.vue";
import PlayerContent from "../components/PlayerContent.vue";

export default {
  components: {
    SearchboxHeader,
    SidebarNavigation,
    PlayerContent,
  },
};
</script>

<style lang="scss" src="@/assets/sass/main.scss"></style>