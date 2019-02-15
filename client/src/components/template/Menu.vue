<template>
  <div class="menu">
    <aside class="menur" v-show="isMenuVisible">
      <router-link class="menu_link" :to="{ name: 'Admin' }">Admin Chars</router-link>
      <router-link class="menu_link" :to="{ name: 'ImportChar' }">Import Char</router-link>
    </aside>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"])
};
</script>

<style>
.menu {
  background: linear-gradient(to right, #cb356b, #bd3f32);
}
.menu_link {
  /*background: linear-gradient(to right, #d3cce35e, #e9e4f065);*/
  padding: 10px;
  display: flex;
  color:blanchedalmond;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.menu_link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  text-decoration: none;
  color:blanchedalmond;
}
</style>