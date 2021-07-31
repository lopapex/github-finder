<template>
  <div class="home">
    <Search />
    <UserCardList />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import UserCardList from "../components/UserCardList.vue";

export default {
  name: "Home",
  components: {
    Search,
    UserCardList,
  },
};
</script>

