<template>
  <div class="admin">
    <span>aloloaloa</span>
    <li v-for="post of posts" :key="post.id">
      <input type="text" name value v-model="name">
      <button type="submit" name="button">Submit</button>
    </li>
  </div>
</template>

<script>
import axios from "axios";
import { baseAPiUrl } from "@/global";

export default {
  name: "Admin",
  data() {
    return {
      postBody: ""
    };
  },
  methods: {
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
