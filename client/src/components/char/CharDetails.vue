<template>
  <div>
    <b-card class="card_char">
      <h2 id="name">{{ char.login }}</h2>
      <div class="char_skills">
        <span v-for="(skillStats, skillName) in char.stats" :key="skillName">
          <h4>{{ capitalize(skillName) }}</h4>
          <ul>Level: {{ skillStats.level }}</ul>
          <ul>XP: {{ numberWithCommas(skillStats.experience) }}</ul>
        </span>
      </div>
    </b-card>
    <br>
  </div>
</template>

<script>
export default {
  name: "CharDetails",
  props: {
    char: {
      type: Object
    }
  },
  methods: {
    capitalize(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style>
.card_char{
  background: linear-gradient(to right, rgba(135, 2, 1, 0), rgba(181, 16, 9, 0.16));
}
.char_skills {
  column-count: 8;
  color: black;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.0em;
  font-weight: lighter;
}

.char_skills ul{
   padding: 0;
   margin-bottom: 10px;
}

#name {
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>