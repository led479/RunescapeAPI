<template>
  <div class="char_stats">
    <h2 id="name">{{ char.login }}</h2>
    <div class="char_skills">
      <span class="char_skill" v-for="(skillStats, skillName) in char.stats" :key="skillName">
        <img :src="getLogo(skillName)">
        {{ capitalize(skillName) }}: {{skillStats.level}}
        <br>
        XP: {{ numberWithCommas(skillStats.experience) }}
        <br>
        <b-progress class="mt-2" :max="max">
          <b-progress-bar v-if="skillName !== 'overall'"
                          :value="(skillStats.experience)"
                          :label="(((skillStats.experience) / max)* 100).toFixed(1) + '%'"
                          show-progress
                          variant="danger"></b-progress-bar>
        </b-progress>
      </span>
    </div>
    <br>
  </div>
</template>

<script>
import agility from "../../assets/skills/agility_icon.png";
import attack from "../../assets/skills/attack_icon.png";
import construction from "../../assets/skills/construction_icon.png";
import cooking from "../../assets/skills/cooking_icon.png";
import crafting from "../../assets/skills/crafting_icon.png";
import defence from "../../assets/skills/defence_icon.png";
import farming from "../../assets/skills/farming_icon.png";
import firemaking from "../../assets/skills/firemaking_icon.png";
import fishing from "../../assets/skills/fishing_icon.png";
import fletching from "../../assets/skills/fletching_icon.png";
import herblore from "../../assets/skills/herblore_icon.png";
import hitpoints from "../../assets/skills/hitpoints_icon.png";
import hunter from "../../assets/skills/hunter_icon.png";
import magic from "../../assets/skills/magic_icon.png";
import mining from "../../assets/skills/mining_icon.png";
import prayer from "../../assets/skills/prayer_icon.png";
import ranged from "../../assets/skills/ranged_icon.png";
import runecrafting from "../../assets/skills/runecrafting_icon.png";
import slayer from "../../assets/skills/slayer_icon.png";
import smithing from "../../assets/skills/smithing_icon.png";
import strength from "../../assets/skills/strength_icon.png";
import thieving from "../../assets/skills/thieving_icon.png";
import woodcutting from "../../assets/skills/woodcutting_icon.png";

export default {
  name: "CharDetails",
  props: {
    char: {
      type: Object
    }
  },
  data() {
    return {
      max: 13034431
    };
  },
  methods: {
    capitalize(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getLogo(logo) {
      switch (logo) {
        case "agility":
          return agility;
        case "attack":
          return attack;
        case "construction":
          return construction;
        case "cooking":
          return cooking;
        case "crafting":
          return crafting;
        case "defence":
          return defence;
        case "farming":
          return farming;
        case "firemaking":
          return firemaking;
        case "fishing":
          return fishing;
        case "fletching":
          return fletching;
        case "herblore":
          return herblore;
        case "hitpoints":
          return hitpoints;
        case "hunter":
          return hunter;
        case "magic":
          return magic;
        case "mining":
          return mining;
        case "prayer":
          return prayer;
        case "runecrafting":
          return runecrafting;
        case "slayer":
          return slayer;
        case "smithing":
          return smithing;
        case "strength":
          return strength;
        case "thieving":
          return thieving;
        case "woodcutting":
          return woodcutting;
        case "ranged":
          return ranged;
        default:
          break;
      }
    }
  }
};
</script>

<style>
.char_stats {
  border: 1px solid #ccc;
  background: linear-gradient(to right, #ff646442, #9474744d);
}

.char_skills {
  display: flex;
  flex-wrap: wrap;
  width: 98%;

  margin: 10px;
  padding: 5px;
  background: #a7080842;
  color: rgb(219, 219, 219);
  font-size: 0.8em;
  font-weight: bolder;
}

.char_skill {
  flex: 1 0 32%;
  background: #50252542;
  margin-bottom: 20px;
  margin: 3px;
  margin-block-end: 0%;
  padding: 5px;
}

.char_skill:last-child {
  color: yellow;
  background: #000000bd;
}



.char_skills ul {
  padding: 0;
  margin-bottom: 10px;
}

#name {
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 15px;
}
</style>