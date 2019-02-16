<template>
  <div class="char_stats">
    <h2 id="name">{{ char.login }}</h2>
    <div class="char_skills">
      <span v-for="(skillStats, skillName) in char.stats" :key="skillName">
        {{ skillName }}: {{skillStats.level}}
        <br>
      </span>
    </div>
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
  }
};
</script>

<style>
.char_skills {
  column-count: 8;
  background: linear-gradient(to right, #ce170a42, #ff07074d);
  color: black;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.0em;
  font-weight: lighter;
}

#name {
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>