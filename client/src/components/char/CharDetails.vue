<template>
  <div class="char_stats">
    <h2 id="name">{{ char.login }}</h2>
    <div class="char_skills">
      <span class="char_skill" v-for="(skillStats, skillName) in char.stats" :key="skillName">
        <img :src="getLogo(skillName)">
        {{ skillName }}: {{skillStats.level}}
 <br>
        &nbspXP: {{ skillStats.experience }}
        <br>
        <b-progress class="mt-2" :max="max">
          <b-progress-bar :value="(skillStats.experience)" show-progress variant="danger"></b-progress-bar>
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
  data(level) {
    return {
      max: 13034431
    };
  },
  methods: {
    getLogo(logo) {
      switch (logo) {
        case "attack":
          return attack;
          break;
        case "construction":
          return construction;
          break;
        case "crafting":
          return crafting;
          break;
        case "defence":
          return defence;
          break;
        case "farming":
          return farming;
          break;
        case "firemaking":
          return firemaking;
          break;
        case "fishing":
          return fishing;
          break;
        case "fletching":
          return fletching;
          break;
        case "herblore":
          return herblore;
          break;
        case "hitpoints":
          return hitpoints;
          break;
        case "hunter":
          return hunter;
          break;
        case "magic":
          return magic;
          break;
        case "mining":
          return mining;
          break;
        case "mining":
          return mining;
          break;
        case "prayer":
          return prayer;
          break;
        case "runecrafting":
          return runecrafting;
          break;
        case "slayer":
          return slayer;
          break;
        case "smithing":
          return smithing;
          break;
        case "strength":
          return strength;
          break;
        case "thieving":
          return thieving;
          break;
        case "woodcutting":
          return woodcutting;
          break;
        case "cooking":
          return cooking;
          break;
        case "ranged":
          return ranged;
          break;
        case "agility":
          return agility;
          break;
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