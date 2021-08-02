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
    <div v-else class="m-3">
      <ErrorCard :message="$t('card.empty')" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "./UserCard.vue";
import ErrorCard from "./ErrorCard.vue";

export default {
  name: "UserCardList",
  components: {
    UserCard,
    ErrorCard,
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
