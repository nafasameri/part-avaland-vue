<template>
  <UploadContext />
  <UploadMusicInfo />
</template>

<script>
import UploadContext from "../components/UploadContext.vue";
import UploadMusicInfo from "../components/UploadMusicInfo.vue";

export default {
  components: {
    UploadContext,
    UploadMusicInfo
  },
};
</script>

<style lang="scss" src="@/assets/sass/upload.scss"></style>
