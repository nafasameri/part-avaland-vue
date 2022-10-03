<template>
  <form @submit.prevent="login" v-if="!formSubmitted">
    <InputForm :type="typeUsername" :id="idUsername" :name="nameUsername"></InputForm>
    <InputForm :type="typePassword" :id="idPassword" :name="namePassword"></InputForm>
    <ButtonActive :type="type" :lable="lable" @click="login({ username: username, password: password })"></ButtonActive>
  </form>
  <div style="color: white;">{{ userInfo }}</div>
</template>

<script>
import ButtonActive from "@/components/base/ButtonActive.vue";
import InputForm from "@/components/base/InputForm.vue";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    type: { String, default:"submit"},
    lable: { String, default:"Login"},

    typeUsername: { String, default:"text"},
    idUsername: { String, default:"username"},
    classUsername: { String, default:"username"},
    nameUsername: { String, default:"username"},

    typePassword: { String, default:"text"},
    idPassword: { String, default:"password"},
    classPassword: { String, default:"password"},
    namePassword: { String, default:"password"},
  },
  components: {
    ButtonActive,
    InputForm
},
  data() {
    return {
      formSubmitted: false,
    };
  },
  methods: {
    ...mapState("user", ["userInfo"]),
    ...mapActions("user", ["login"]),
  },
};
</script>

<style>
</style>