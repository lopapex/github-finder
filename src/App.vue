<template>
  <div id="app">
    <NavBar />
    <router-view class="content" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.content {
  max-width: 1228px;
  margin: auto;
}
</style>
