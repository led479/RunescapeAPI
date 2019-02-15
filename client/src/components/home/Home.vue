<template>
  <div class="Home">
    <h1> ass </h1>
    <div class="columns medium-4" v-for="(value, key) in results" :key="value.id">
      <div class="charStats">
        
        <p>{{ key }}: {{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:3000/chars/";

export default {
  name: "Home",

  data() {
    return {
      results: {}
    };
  },
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data;
    });
  }
};
</script>
 
 <style>
.content {
  grid-area: content;
  background-color: #b9b8b8;
  padding: 20px;
}

.card-section > p {
  background-color: #afa0a0;
}
</style>