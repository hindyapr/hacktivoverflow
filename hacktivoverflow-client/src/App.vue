<template>
  <div id="app">
    <navbar
      class="fixed has-background-white"
      ref="navbar"
    />
    <router-view/>
  </div>
</template>

<script>
import axios from "@/api/axios.js";
import navbar from "@/components/navbar.vue";

export default {
  components: { navbar }
}
</script>


<style scoped>
.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 999;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
