<template>
  <div class="home">
    <b-input-group class="p-5">
      <template #prepend>
        <b-input-group-text class="prepend-text bg-primary text-light"
          >@</b-input-group-text
        >
      </template>
      <b-form-input
        :placeholder="$t('home.username')"
        v-model="searchText"
      ></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Home",

  computed: {
    ...mapGetters(["getSearchText"]),
    searchText: {
      get() {
        return this.getSearchText;
      },
      set(newValue) {
        this.setSearchText(newValue);
      },
    },
  },
  methods: {
    ...mapMutations(["setSearchText"]),
  },
};
</script>

<style scope>
.prepend-text {
  border: none;
}
</style>
