<template>
  <div class="user">
    <h1>{{ $route.params.login }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "User",

  mounted() {
    this.getUserDetails(this.$route.params.login);
  },

  computed: {
    ...mapGetters(["getSelectedUser"]),
    user() {
      return this.getSelectedUser;
    },
  },

  methods: {
    ...mapActions(["getUserDetails"]),
  },
};
</script>
