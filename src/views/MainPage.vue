<template>
  <div class="mainpage">
    <div class="top">
      <div class="mainpage__banner">
        <MainPageBanner />
      </div>
      <div class="mainpage__premium-banner">
        <PremiumBanner />
      </div>
    </div>
    <div class="bottom">
      <div class="right">
        <div class="mainpage__latest-songs">
          <LatestMusics />
        </div>
        <div class="mainpage__selected-playlists">
          <SelectedPlaylist />
        </div>
      </div>

      <div class="mainpage__history-favorites">
        <FavoriteHistorySwitch @some-event="ChangeT" />
        <FavoriteList v-if="!active.state" />
        <HistoryList v-if="active.state" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainPageBanner from "../components/MainPageBanner.vue";
import PremiumBanner from "../components/PremiumBanner.vue";
import LatestMusics from "../components/LatestMusics.vue";
import SelectedPlaylist from "../components/SelectedPlaylist.vue";
import FavoriteHistorySwitch from "../components/FavoriteHistorySwitch.vue";
import FavoriteList from "../components/FavoriteList.vue";
import HistoryList from "../components/HistoryList.vue";

import { reactive } from "@vue/reactivity";
const active = reactive({
  state: true,
});
function ChangeT() {
  active.state = !active.state;
  console.log(active.state);
}
</script>

<style lang="scss" src="@/assets/sass/main-page.scss"></style>