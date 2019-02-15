<template>
  <div class="admin">
    <span>Add new Char</span>
    <b-form>
      <b-form-input v-model="char.login" placeholder="Login"></b-form-input>
      <b-button @click="postChar">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { baseAPiUrl } from "@/global";

export default {
  name: "Admin",
  data() {
    return {
      char: {
          login: ''
      }
    };
  },
  methods: {
    postChar() {
      if (this.login == "") {
        alert("Preencha o campo Login.");
        event.preventDefault();
      } else {
        axios
          .post(`${baseAPiUrl}/chars`, this.char)
          .then(() => { this.$router.push( {name: 'Home' } )
        });
      }
    },

  },
};
</script>
   
<style>
</style>
