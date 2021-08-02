<template>
  <div class="p-5">
    <UserDetailCard v-if="!loading" />
    <div v-else class="d-flex justify-content-center mb-3">
      <b-spinner variant="secondary" label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
import UserDetailCard from "../components/UserDetailCard.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "User",
  components: {
    UserDetailCard,
  },

  mounted() {
    this.getUserDetails(this.$route.params.login);
  },

  beforeDestroy() {
    this.setSelectedUser({});
  },

  computed: {
    ...mapGetters(["getSelectedUser"]),
    user() {
      return this.getSelectedUser;
    },
    loading() {
      return _.isEmpty(this.user);
    },
  },

  methods: {
    ...mapMutations(["setSelectedUser"]),
    ...mapActions(["getUserDetails"]),
  },
};
</script>



