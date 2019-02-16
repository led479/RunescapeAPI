<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
        <router-link to = "/"> {{ title }}</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    hideToggle: Boolean
  },
  computed: {
    icon() {
      return "fas fa-bars";
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }  
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #c54157, #c8223e);
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle:hover {
  cursor: pointer;
}

.title {
  height: 28%;
  color: #fff;
  flex-grow: 1;
  text-align: left;
  padding-left: 10px;
  font-weight: 100;
  font-size: 1.2rem;
  
  
}

.title a {
    color: #fff;
    text-decoration: none;
}

.title a:hover {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

header.header > a.toggle {
    width: 60px;
    height: 100%; 
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

header.header > a.toggle:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
}
</style>
