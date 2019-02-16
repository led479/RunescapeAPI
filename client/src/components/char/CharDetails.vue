<template>

  <div class="charStats">
    <h2 id="name">{{ char.login }}</h2>
    <div class="char_skills">
          <span v-for="(skillStats, skillName) in char.stats" :key="skillName">
            {{ skillName }}: {{skillStats.level}}
            <br>
          </span>
    </div>
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
  };
</script>

<style>
  .char_skills {
    column-count: 8;
    background-color: rgba(0, 0, 0, 0.212);
    padding: 20px;
  }

  #name {
    justify-self: flex-start;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>