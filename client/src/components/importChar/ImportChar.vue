<template>
  <div class="admin">
    <span>Import Char</span>
    <b-form inline>
      <b-form-input v-model="login" placeholder="Login"  class="mb-2 mr-sm-2 mb-sm-0"></b-form-input>
      <b-button  variant="primary" @click="postChar">Add</b-button>
    </b-form>

    <span class="alert-danger" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
import axios from "axios";
import { baseAPiUrl } from "@/global";

export default {
  name: "Import",
  data() {
    return {
      login: "",
      error: null
    };
  },
  methods: {
    postChar() {
      this.$Progress.start()
      if (this.login === "") {
        this.error = "Preencha o campo Login.";
        this.$Progress.finish()
      } else {
        axios
          .post(`${baseAPiUrl}/chars/import/` + this.login)
          .then(() => {
            this.$router.push({ name: "Home" });
            this.$Progress.finish()
          })
          .catch(error => {
            this.error = error.response.data.error;
            this.$Progress.finish()
          });
      }
    }
  }
};
</script>

<style>
</style>