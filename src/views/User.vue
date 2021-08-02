<template>
  <div class="p-3">
    <div v-if="!loading">
      <UserDetailCard />
      <Repositories />
    </div>
    <div v-else class="d-flex justify-content-center mb-3">
      <b-spinner variant="secondary" label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
import UserDetailCard from "../components/UserDetailCard.vue";
import Repositories from "../components/Repositories.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "User",
  components: {
    UserDetailCard,
    Repositories,
  },

  mounted() {
    this.getUserDetails(this.$route.params.login);
    this.getRepositoriesAPI({ name: this.$route.params.login, page: 1 });
  },

  beforeDestroy() {
    this.setSelectedUser({});
    this.setRepositories([]);
  },

  computed: {
    ...mapGetters(["getSelectedUser", "getRepositories"]),
    user() {
      return this.getSelectedUser;
    },
    repositories() {
      return this.getRepositories;
    },
    loading() {
      return _.isEmpty(this.user);
    },
  },

  methods: {
    ...mapMutations(["setSelectedUser", "setRepositories"]),
    ...mapActions(["getUserDetails", "getRepositoriesAPI"]),
  },
};
</script>



