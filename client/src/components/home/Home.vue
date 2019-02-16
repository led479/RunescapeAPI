<template>
  <div class="Home">
    <char-details v-for="char in chars" :key="char.login" :char="char"></char-details>
  </div>
</template>

<script>
import axios from "axios";
import CharDetails from "../char/CharDetails"

import { baseAPiUrl } from "@/global";

export default {
  name: "Home",
  components: { CharDetails },

  data() {
    return {
      chars: {}
    };
  },
  mounted() {
    this.getChars();
  },
  methods: {
    getChars() {
      axios.get(`${baseAPiUrl}/chars`).then(response => {
        this.chars = response.data;
      });
    }
  }
};
</script>
 
 <style>
.content {
  grid-area: content;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  padding: 20px;
}

.card-section > p {
  background-color: #afa0a0;
}


</style>