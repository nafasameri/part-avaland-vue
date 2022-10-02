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

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  // margin-right: 20%;
  margin-bottom: 5%;
}

.content {
  direction: rtl;
  margin: 0px 3%;
  // height: 100vh;
}
</style>
