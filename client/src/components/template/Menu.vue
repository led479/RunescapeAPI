<template>
  <div class="Menu">
    <aside class="menur" v-show="isMenuVisible">
      <router-link class="admin" to="/admin">
        <i></i> Admin Chars
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

</style>
