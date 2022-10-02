<template>
  <div class="modal">
    <div class="modal__row" @click="clickPlaylistModal">
      <img
        src="../assets/img/icon/linear/receipt-square.png"
        alt=""
        class="modal__icon"
      />
      <div class="modal__desc">اضافه کردن به لیست پخش</div>
    </div>
    <span class="modal__row--underline"></span>

    <div class="modal__row" @click="clickEditModal">
      <img
        src="../assets/img/icon/linear/edit.png"
        alt=""
        class="modal__icon"
      />
      <div class="modal__desc">ویرایش آهنگ</div>
    </div>
    <span class="modal__row--underline"></span>

    <div class="modal__row" @click="clickTrashModal">
      <img
        src="../assets/img/icon/linear/trash.png"
        alt=""
        class="modal__icon"
      />
      <div class="modal__desc">حذف آهنگ</div>
    </div>

      <UploadMusicInfo class="poster__edit-modal" v-if="openEditModal" />
      <DeleteMusicModal class="poster__delete-modal" v-if="openTrashModal" />
      <AddToPlaylistModal
        class="poster__playlist-modal"
        v-if="openPlaylistModal"
      />
  </div>
</template>

<script setup>
import { ref } from "vue";

import UploadMusicInfo from "./UploadMusicInfo.vue";
import DeleteMusicModal from "./DeleteMusicModal.vue";
import AddToPlaylistModal from "./AddToPlaylistModal.vue";

let openEditModal = ref(false);
let openTrashModal = ref(false);
let openPlaylistModal = ref(false);

function clickEditModal() {
  openEditModal.value = !openEditModal.value;
}
function clickTrashModal() {
  openTrashModal.value = !openTrashModal.value;
}
function clickPlaylistModal() {
  openPlaylistModal.value = !openPlaylistModal.value;
}
</script>

<style lang="scss" src="@/assets/sass/music-details.scss"></style>
