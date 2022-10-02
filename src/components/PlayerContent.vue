<template>
  <div class="player">
    <div class="player__options">
      <img src="../assets/img/icon/bold/more.svg" class="player__icon-more" />
      <img src="../assets/img/icon/bold/heart.svg" />
    </div>

    <div class="player__controler">
      <img src="../assets/img/icon/bold/previous.svg" alt="" srcset="" />
      <img src="../assets/img/icon/bold/puseButtton.svg" alt="" srcset="" />
      <img src="../assets/img/icon/bold/next.svg" alt="" srcset="" />

      <span class="player__main-time">۴:۵۹</span>
      <div class="player__control-bar">
        <div class="player__progsive-bar"></div>
        <div class="player__progsive-button"></div>
      </div>
      <span class="player__left-time">۴:۵۹</span>
      <img src="../assets/img/icon/bold/volume-high.svg" />

      <div class="player__volume-bar">
        <div class="player__volume-level"></div>
      </div>
    </div>

    <div class="player__music-profile">
      <div class="player__artist-name">
        <span class="player__name">دستبند</span>
        <span class="player__artist">رهام</span>
      </div>
      <img
        src="../assets/img/profile1.jpg"
        class="player__pic"
        alt="MusicPoster"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" src="@/assets/sass/player.scss" scoped></style>
