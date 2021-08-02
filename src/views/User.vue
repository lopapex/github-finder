<template>
  <div class="p-3">
    <div v-if="!loading">
      <UserDetailCard />
      <Repositories />
    </div>
    <Loading v-else class="mb-3" />
  </div>
</template>

<script>
import UserDetailCard from "../components/UserDetailCard.vue";
import Repositories from "../components/Repositories.vue";
import Loading from "../components/Loading.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "User",
  components: {
    UserDetailCard,
    Repositories,
    Loading,
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



