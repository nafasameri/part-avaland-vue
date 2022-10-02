<template>
  <form>
   <!-- action="http://127.0.0.1:81/user/login" method="POST"> -->
    <input
      type="text"
      id="username"
      name="username"
      placeholder="username"
      v-model="username"
    /><br />
    <input
      type="password"
      id="password"
      name="password"
      placeholder="password"
      v-model="password"
    /><br />
    <input type="submit" value="Login" @click="login(username, password)" />
  </form>
</template>

<script setup>
// import user from "@/service/user";
import axios from 'axios';

async function login(username, password) {
  //   console.log(user.login(username, password));
  const data = JSON.stringify({
    username: username,
    password: password,
  });

  await axios.post("http://127.0.0.1:81/user/login", data)
    .then(function (response) {
      console.log(response.data.message);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
</script>

<style>
</style>