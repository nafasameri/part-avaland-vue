<template>
  <section class="poster">
    <figure>
      <img
        src="../assets/../assets/img/Rectangle-9.jpg"
        class="poster__image"
      />
      <img
        src="../assets/img/icon/bold/play.png"
        alt=""
        class="poster__btn-play"
      />
    </figure>
    <div class="poster__desc">
      <h2 class="poster__title">باطل</h2>
      <div class="poster__detail">
        <img src="../assets/img/icon/outline/frame.png" />
        <span>شادمهر عقیلی</span>
        <span class="poster__seperator">|</span>
        <img src="../assets/img/icon/linear/clock.svg" />
        <span>۰۳:۴۴</span>
      </div>
      <div class="poster__share-btn"  >
        <div>

        <img src="../assets/img/icon/linear/heart.svg" alt="" />
        </div>
        <div>

        <img src="../assets/img/icon/outline/share.png" alt="" />
        </div>
        <div @click="clickMainModal">
           <img
          src="../assets/img/icon/bold/more.svg"
          alt=""
          class="more-icon"
         
        />
        </div>
       
      </div>
    </div>
    <div class="poster__lyrics">
      <p>
        اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون که
        پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا
        دلش تنگه ببینه ما دو تا رو با هم
        <br />
        <br />
        اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون که
        پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا
        دلش تنگه ببینه ما دو تا رو با هم
      </p>

      <span class="poster__lyrics__more"
        >مشاهده بیشتر
        <img
          src="../assets/img/icon/linear/setting-4.png"
          class="poster__arrow-down"
        />
      </span>
    </div>
    <MusicDetailModal class="poster__options" v-if="openMainModal" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import MusicDetailModal from "./MusicDetailModal.vue";

let openMainModal = ref(false);

function clickMainModal() {
  openMainModal.value = !openMainModal.value;
  
}
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.poster {
  background-image: url(../assets/img/Rectangle-13.png);
  background-size: cover;
  border-radius: 30px;
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  position: relative;

  &__image {
    width: 264px;
    height: 250px;
    border-radius: 30px;
  }

  &__desc {
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  &__lyrics {
    width: 464px;
    height: 175px;

    font-weight: 100;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    color: rgba(255, 255, 255, 0.6);

    display: flex;
    flex-direction: column;
    justify-content: center;
    direction: rtl;

    &__more {
      color: $primary-color;
    }
  }

  &__arrow-down {
    width: 8.55px;
    height: 5.03px;
    padding-right: 10px;
  }

  &__title {
    font-size: 32px;
    color: white;
    margin: 0px;
    font-size: 32px;
    line-height: 45px;
  }

  &__detail {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: $secondry-color;
    gap: 10px;
  }

  &__seperator {
    color: white;
  }

  figure {
    position: relative;
  }

  &__btn-play {
    width: 68px;
    height: 68px;
    position: absolute;
    right: -20px;
    bottom: -20px;
  }

  &__share-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    img {
      width: 36px;
      height: 36px;
    }
  }

  &__options {
    position: absolute;
    right: 472px;
    top: 244px;
  }

  &__edit-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 48px;

    position: absolute;
    width: 1262px;
    height: 775px;
    right: 298px;
    top: 124px;
  }

  .music-info__content {
    background: #353535 !important;
    z-index: 999;
    order: 999;
    // width: 1262px;
    // right: 0px;
    // top: 0px;
  }

  .music-info__title {
    display: none;
  }
}
</style>
