<template>
  <div class="playlist-modal">
    <div class="playlist-modal__header">
      <div class="playlist-modal__buttons">
        <img
          src="../assets/img/icon/linear/close-circle.png"
          alt=""
          class="playlist-modal__close"
        />
        <div class="playlist-modal__actions">
          <button
            class="btn-select"
            :class="playlistModal == false && 'playlist-modal__btn--active'"
            @click="clickPlaylistModal"
          >
            انتخاب لیست پخش
          </button>
          <button
            class="btn-create"
            :class="playlistModal && 'playlist-modal__btn--active'"
            @click="clickPlaylistModal"
          >
            ایجاد لیست پخش
          </button>
        </div>
      </div>
    </div>
    <span class="line1"></span>

    <!-- createPlaylistModal -->
    <div class="playlists" v-if="playlistModal">
      <div class="playlists__title">نام لیست پخش</div>
      <div class="playlists__name">
        <div class="playlists__new-name">
          <input type="text" class="playlists__input-name" />
        </div>
        <button class="playlists__btn-save">ذخیره</button>
      </div>
      <div class="playlists__musics">
        <div class="playlists__music">
          <img
            class="playlists__music-poster"
            src="../assets/img/Rectangle-9.jpg"
            alt=""
          />
          <div class="playlists__music-info">
            <div class="playlists__music-name">باطل</div>
            <div class="playlists__music-artist">شادمهر عقیلی</div>
          </div>
        </div>
      </div>
    </div>

    <span class="line2" v-if="playlistModal"></span>

    <div class="similar-music" v-if="playlistModal">
      <div class="similar-music__title">آهنگ های مشابه</div>
      <div
        class="similar-music__musics"
        v-for="(music, index) in similarMusic"
        :key="index"
      >
        <div class="similar-music__music">
          <div class="similar-music__content">
            <div class="similar-music__row">
              <div class="similar-music__add-to-playlist">
                اضافه کردن به لیست پخش
              </div>
              <div class="similar-music__col">
                <div class="similar-music__music-info">
                  <div class="similar-music__music-name">{{ music.name }}</div>
                  <div class="similar-music__music-artist">
                    {{ music.artist }}
                  </div>
                </div>
                <img
                  :src="require(`../assets/img/${music.poster}`)"
                  alt=""
                  class="similar-music__poster"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end createPlaylistModal -->

    <!-- addPlaylistModal -->
    <div class="playlists" v-if="playlistModal == false">
      <div class="playlists__title">فیلتر لیست پخش ها</div>
      <div class="playlists__name">
        <div class="playlists__new-name">
          <input
            type="text"
            class="playlists__input-name"
          />
        </div>
      </div>
    </div>

    <div class="similar-music" v-if="playlistModal == false">
      <div class="similar-music__title">آهنگ های مشابه</div>
      <div
        class="similar-music__musics"
        v-for="(music, index) in similarMusic"
        :key="index"
      >
        <div class="similar-music__music-add">
          <div class="similar-music__content">
            <div class="similar-music__row">
              <div class="similar-music__add-to-playlist">
                اضافه کردن به لیست پخش
              </div>
              <div class="similar-music__col">
                <div class="similar-music__music-info">
                  <div class="similar-music__music-name">{{ music.name }}</div>
                  <div class="similar-music__music-artist">
                    {{ music.artist }}
                  </div>
                </div>
                <img
                  :src="require(`../assets/img/${music.poster}`)"
                  alt=""
                  class="similar-music__poster"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end addPlaylistModal -->
  </div>
</template>

<script setup>
import { ref } from "vue";

let playlistModal = ref(false);

function clickPlaylistModal() {
  playlistModal.value = !playlistModal.value;
}

const similarMusic = ref([
  {
    name: "باطل",
    poster: "posters/Rectangle-8.png",
    artist: "شادمهر عقیلی",
  },
  {
    name: "باطل",
    poster: "posters/Rectangle-8.png",
    artist: "شادمهر عقیلی",
  },
  {
    name: "باطل",
    poster: "posters/Rectangle-8.png",
    artist: "شادمهر عقیلی",
  },
]);
</script>

<style lang="scss" src="@/assets/sass/music-modals.scss" scoped></style>
