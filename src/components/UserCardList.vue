<template>
  <div class="user-card-list">
    <div v-if="users.length || !searchText.length">
      <b-container>
        <b-row>
          <b-col cols="6" md="4" v-for="user in users" :key="user.id">
            <UserCard :user="user" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <b-card bg-variant="primary" class="mx-5">
        <b-card-text class="text-light">
          {{ $t("card.empty") }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "./UserCard.vue";

export default {
  name: "UserCardList",
  components: {
    UserCard,
  },
  computed: {
    ...mapGetters(["getUsers", "getSearchText"]),
    users() {
      return this.getUsers;
    },

    searchText() {
      return this.getSearchText;
    },
  },
};
</script>


<style>
</style>
