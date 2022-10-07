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
        <form @submit.prevent="onShowFileUpload" class="upload__box" enctype="multipart/form-data" method="POST" action="http://127.0.0.1:81/music/upload">
          <div v-if="uploaded" class="upload__status">اتمام بارگزاری</div>
          <progress v-if="uploaded" class="upload__progressbar" value="100" max="100"></progress>
          <div v-if="uploaded" class="upload__progressbar-value">۱۰۰%</div>

          <div v-if="!uploaded" class="upload__status">کلیک کنید یا آهنگ خود را در این قسمت رها کنید</div>
          <button v-if="!uploaded" class="btn-active" onclick="document.getElementById('btn-upload').click()">
            آپلود آهنگ
          </button>
          <input v-if="!uploaded" type="file" id="btn-upload" name="multipleFiles" multiple="multiple" 
            @click="onShowFileUpload" @change="onFileUpload" ref="theFile" hidden />
        </form>
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

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      uploaded: false,
    };
  },
  computed: {
    ...mapState("music", ["music"]),
  },
  methods: {
    ...mapActions("music", ["upload"]),
    onShowFileUpload() {
      this.$refs.theFile.value = "";
      const onHandleMouseEnter = () => {
        if (this.$refs.theFile.value.length === 0) {
          console.log("No files loaded");
        }
        document.body.removeEventListener("mouseenter", onHandleMouseEnter);
      };
      document.body.addEventListener("mouseenter", onHandleMouseEnter);
    },
    async onFileUpload() {
      console.log("Files Uploaded");
      let output = await this.upload();
      if (output.statusCode) // == 200)
        this.uploaded = !this.uploaded;
    },
  },
};
</script>

<!-- <script setup>
import axios from "axios";

function axiosRequest() {
  // var config = {
  //   method: "POST",
  //   url: "http://127.0.0.1:81/music/upload",
  //   headers: { 'Set-Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0MjgyMTAwOTY4LCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjExMTEiLCJpYXQiOjE2NjQyODIxMDB9.pB8PttLTW-RGw5yDOPKWbNE4_Hn6ConNijVprfdNvv4; Expires=Tue, 27 Sep 2022 12:35:10 GMT; Path=/; Domain=127.0.0.1'},
  // };
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  var config = {
    method: "POST",
    url: "http://127.0.0.1:81/music/upload",
    headers: { 'Set-Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0NzE4NjY3NTgzLCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjExMTEiLCJpYXQiOjE2NjQ3MTg2Njd9.7LgrQVE4n9zMnAxnVBZAe0KtSyMm4T_sMRI8pZrlZbw; Expires=Sun, 02 Oct 2022 13:51:17 GMT; Path=/; Domain=127.0.0.1'},
  };
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
</script> -->

<style lang="scss" src="@/assets/sass/upload.scss"></style>
