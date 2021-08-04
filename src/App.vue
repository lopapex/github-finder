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

.hidden_header {
  display: none;
}

.page-item .page-link {
  color: var(--light);
}

.page-item .page-link {
  background-color: var(--primary);
  border-color: var(--primary);
}

.page-item.disabled .page-link {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--light);
}

.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background-color: var(--light);
  cursor: pointer;
}

.table-hover tbody tr td,
.table-hover tbody tr th {
  background-color: var(--primary);
  border: 1px solid var(--secondary);
}

.content {
  max-width: 1228px;
  margin: auto;
}
</style>
