<template>
  <div class="Home">
    <div class="columns medium-4" v-for="char in chars" :key="char.login">
      <div class="charStats">
        <h2>Login: {{ char.login }}</h2>
        <div>
          <span v-for="(skillStats, skillName) in char.stats" :key="skillName">{{ skillName }}: {{skillStats.level}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { baseAPiUrl } from "@/global";

export default {
  name: "Home",

  data() {
    return {
      chars: {}
    };
  },
  mounted() {
    this.getChars()
  },
  methods: {
    getChars() {
      axios
        .get(`${baseAPiUrl}/chars`)
        .then(response => {
          this.chars = response.data;
      });
    }
  },

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