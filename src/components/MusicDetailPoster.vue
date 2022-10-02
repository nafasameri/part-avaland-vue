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
      <div class="poster__share-btn">
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

<style lang="scss" src="@/assets/sass/music-details.scss"></style>
