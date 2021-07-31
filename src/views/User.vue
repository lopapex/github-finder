<template>
  <div class="user">
    <h1>{{ user.login }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "User",

  computed: {
    ...mapGetters(["getUsers"]),
    user() {
      return this.getUsers.find((user) => user.id == this.$route.params.id);
    },
  },
};
</script>
