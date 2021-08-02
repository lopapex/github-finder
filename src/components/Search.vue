<template>
  <div class="search">
    <b-input-group class="p-5">
      <template #prepend>
        <b-input-group-text class="prepend-text bg-primary text-light">
          @
        </b-input-group-text>
      </template>
      <b-form-input
        :placeholder="$t('search.username')"
        v-model="searchText"
      ></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",

  computed: {
    ...mapGetters(["getSearchText"]),
    searchText: {
      get() {
        return this.getSearchText;
      },
      set(newValue) {
        this.getUsers(newValue);
      },
    },
  },
  methods: {
    ...mapActions(["getUsers"]),
  },
};
</script>

<style scope>
.prepend-text {
  border: none;
}
</style>
