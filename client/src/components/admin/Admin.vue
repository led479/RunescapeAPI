<template>
  <div class="admin">
    <span>Add new Char</span>
    <form v-on:submit="sub" action="#" method="post">
      <input v-model="login" placeholder="Login">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { baseAPiUrl } from "@/global";

export default {
  name: "Admin",
  data() {
    return {
      login: ""
    };
  },
  methods: {
    sub: function(event) {
      if (this.login == "") {
        alert("Preencha o campo Login.");
        event.preventDefault();
      } else {
        axios
          .post(`${baseAPiUrl}/chars`, {
            login: this.login
          })
          .then(response => {});
      }
    },

    postChar() {
      axios
        .post(`${baseAPiUrl}/chars`, {
          body: this.postBody
        })
        .then(response => {});
    }
  },
  mounted() {
    this.postChar();
  }
};
</script>
   
<style>
</style>
