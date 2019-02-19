<template>
  <div class="admin">
    <h1>See your stats</h1>

    <b-form class="search-form" inline>
      <b-form-input
        id="ip1"
        v-model="login"
        placeholder="Type your username"
        class="mb-2 mr-sm-2 mb-sm-0"
        @keyup.enter.native="postChar"
      ></b-form-input>
      <b-button id="btn-srch" variant="primary" @click="postChar">Search</b-button>
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
      if (this.login === "") {
        alert("Preencha o campo Login.");
        event.preventDefault();
      } else {
        this.$Progress.start();
        axios
          .post(`${baseAPiUrl}/chars/import/` + this.login)
          .then(() => {
            this.$router.push({ name: "Home" });
            this.$Progress.finish();
          })
          .catch(error => {
            this.error = error.response.data.error;
            this.$Progress.finish();
          });
      }
    }
  }
};
</script>

<style>
#ip1 {
  border-radius: 25px;
  border: 2px solid rgb(79, 26, 114);
  padding: 20px;
  width: 200px;
  height: 15px;
}
.search-form {
  margin-top: 30px;
}
.admin {
  background: rgba(221, 23, 23, 0.226);
  flex-flow: column;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btn-srch {
  border-radius: 25px;
  border: 2px solid rgb(79, 26, 114);
  background: rgb(71, 10, 214);
  padding: 10px;
  width: 85px;
  margin-left: 5px;
}
.alert-danger {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>