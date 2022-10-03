<template>
  <div class="playlist-modal__actions">
    <button @click="clickModal">ورود </button>
    <button @click="clickModal">ثبت نام</button>
  </div>

  <form @submit.prevent="login({ username, password })" v-if="!signuoOrLogin">
    <InputForm :type="typeUsername" :id="nameUsername" :name="nameUsername" v-model="username"></InputForm>
    <InputForm :type="typePassword" :id="namePassword" :name="namePassword" v-model="password"></InputForm>
    <ButtonActive :type="type" :lable="lableLogin"></ButtonActive>
    <div style="color: white;">userInfo: {{ userInfo }}</div>
  </form>

  <form @submit.prevent="signup({ username, password })" v-if="signuoOrLogin">
    <InputForm :type="typeUsername" :id="nameUsername" :name="nameUsername" v-bind="username"></InputForm>
    <InputForm :type="typePassword" :id="namePassword" :name="namePassword" v-bind="password"></InputForm>
    <ButtonActive :type="type" :lable="lableSignUp"></ButtonActive>
    <div style="color: white;">userInfo: {{ userInfo }}</div>
  </form>
</template>

<script>
import ButtonActive from "@/components/base/ButtonActive.vue";
import InputForm from "@/components/base/InputForm.vue";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    type: { String, default:"submit"},
    lableLogin: { String, default:"ورود"},
    lableSignUp: { String, default:"ثبت نام"},

    typeUsername: { String, default:"text"},
    nameUsername: { String, default:"username"},

    typePassword: { String, default:"text"},
    namePassword: { String, default:"password"},
  },
  components: {
    ButtonActive,
    InputForm
},
  data() {
    return {
      signuoOrLogin: false,
    };
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  methods: {
    ...mapActions("user", ["login", "signup"]),
    clickModal() {
      this.signuoOrLogin = !this.signuoOrLogin;
    }
  },
};
</script>

<style scoped>
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 25%;
  }
</style>