<template>
  <div class="music-info">
    <div class="music-info__title">اطلاعات آهنگ</div>
    <div class="music-info__content">
      <form @submit.prevent="create({name, artist, album, duration, lyric})" class="music-info__form">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="name" class="music-info__label">نام آهنگ</label>
              <input
                type="text"
                id="name"
                name="name"
                class="music-info__input"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="artist" class="music-info__label">نام خواننده</label>
              <input
                type="text"
                id="artist"
                name="artist"
                class="music-info__input"
                v-model="artist"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="album" class="music-info__label">نام آلبوم</label>
              <input
                type="text"
                id="album"
                name="album"
                class="music-info__input"
                v-model="album"
              />
            </div>

            <div class="form-group">
              <label for="duration" class="music-info__label"
                >مدت زمان آهنگ</label
              >
              <input
                type="text"
                id="duration"
                name="duration"
                class="music-info__input"
                v-model="duration"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group browse-button">
              <!-- <label for="poster" class="music-info__label">بارگذاری عکس</label> -->
              <img src="../assets/img/browse.png" alt="" id="loadPoster" />
              <div class="music-info__desc-browse">
                <img
                  src="../assets/img/icon/linear/Camera.png"
                  alt=""
                  id="cameraIcon"
                />
                <button
                  class="poster"
                  onclick="document.getElementById('poster').click()"
                >
                  بارگذاری عکس
                </button>
                <input type="file" id="poster" name="poster" />
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="lyric" class="music-info__label">متن آهنگ</label>
          <textarea
            type="text"
            id="lyric"
            name="lyric"
            class="music-info__input"
            v-model="lyric"
          >
          </textarea>
        </div>

        <div class="buttons-action">
          <input type="submit" class="btn-active" value="ذخیره تغییرات" />
          <input type="reset" class="btn-disable" value="لغو"  />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("music", ["create"])
  },
};
</script>

<style lang="scss" src="@/assets/sass/upload.scss"></style>