<template>
  <div class="menu">
    <aside class="menur" v-show="isMenuVisible">
      <router-link class="admin" to="/admin">
        <a class="admin_link">Admin Chars</a>
      </router-link>
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
.admin_link {
  background: linear-gradient(to right, #d3cce35e, #e9e4f065);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.admin_link:hover {
  text-decoration: none;
}
</style>