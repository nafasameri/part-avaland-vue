<template>
  <div class="uploader">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">بارگزاری آهنگ</li>
      <img src="../assets/img/icon/linear/arrow-left.png" />
      <li class="breadcrumbs__item">ذخیره اطلاعات</li>
    </ul>

    <div class="upload">
      <div class="upload__title">بارگزاری آهنگ</div>
      <div class="upload__content">
        <div class="upload__box">
          <div class="upload__status">
            کلیک کنید یا آهنگ خود را در این قسمت رها کنید
          </div>

          <button
            class="btn-active"
            onclick="document.getElementById('btn-upload').click()"
          >
            آپلود آهنگ
          </button>
          <button @click="axiosRequest()">click</button>
          <!-- <input type="file" class="" id="btn-upload" /> -->
            <!-- <html v-html="rawHtml"></html> -->
          <!-- <progress
            class="upload__progressbar"
            value="100"
            max="100"></progress>
          <div class="upload__progressbar-value">۱۰۰%</div> -->
        </div>
        <div class="upload__desc">
          <img
            src="../assets/img/icon/bold/info-circle.png"
            alt=""
            class="info"
          />
          <span
            >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

var config = {
  method: 'get',
  url: '127.0.0.1:8000/music/form',
  headers: { }
};
 function axiosRequest(){

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}
// 
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;
.breadcrumbs {
  // direction: rtl;
  color: $secondry-color;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0px;
  gap: 8px;
  list-style-type: none;

  &__item {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }

  &__item:first-child {
    color: $primary-color;
    padding: 5px;
  }
}

.upload {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  height: 386px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #ffffff;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 24px;
    gap: 16px;
    width: 90%;
    height: 300px;
    background: rgba(70, 70, 70, 0.4);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  &__frame {
    display: flex;
    // flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 88%;
    height: 282px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 100%;
    height: 240px;
    border: 2px dashed rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    position: relative;
  }

  &__status {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  progress {
    direction: ltr;
    display: block;
    border: 0 none;
    background: $background-color;
    color: #ffffff;
    width: 50%;
    border-radius: 50px;
  }

  progress::-moz-progress-bar {
    border-radius: 50px;
    background: $primary-color;
  }

  progress::-webkit-progress-bar {
    background: transparent;
  }

  progress::-webkit-progress-value {
    border-radius: 50px;
    background: $primary-color;
    color: #ffffff;
  }

  &__progressbar-value {
    color: #ffffff;
    position: absolute;
    bottom: 83px;
  }

  &__desc {
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: right;
    color: $secondry-color;
  }

  .info {
    padding: 5px;
  }

  #btn-upload {
    display: none;
  }

  .btn-active {
    padding: 10px 100px !important;
  }
}
</style>