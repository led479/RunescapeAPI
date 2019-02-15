<template>
  <div class="admin">
    <span>Add new Char</span>

    <b-form inline>
      <label class="sr-only">Name</label>
      <b-input v-model="char.login" placeholder="Login" class="mb-2 mr-sm-2 mb-sm-0"/>
      <b-button variant="primary" @click="postChar">Add</b-button>
    </b-form>

    <div style="padding-top: 20px;">
      <span>Delete Char</span>
    </div>
    <b-form inline>
      <label class="sr-only">Name</label>
      <b-input v-model="char.loginDel" placeholder="Login" class="mb-2 mr-sm-2 mb-sm-0"/>
      <b-button variant="danger" @click="deleteChar">Delete</b-button>
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
        login: ""
      }
    };
  },
  methods: {
    postChar() {
      if (this.char.login === "") {
        alert("Preencha o campo Login.");
        event.preventDefault();
      } else {
        axios.post(`${baseAPiUrl}/chars`, this.char).then(() => {
          this.$router.push({ name: "Home" });
        });
      }
    },
    deleteChar() {
      if (this.char.loginDel === "") {
        alert("Preencha o campo Login.");
        event.preventDefault();
      } else {
        axios.delete(`${baseAPiUrl}/chars/` + this.char.loginDel).then(() => {
          this.$router.push({ name: "Home" });
        });
      }
    }
  }
};
</script>
<style>
</style>
