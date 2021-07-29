<template>
  <b-navbar type="dark" toggleable="sm" variant="dark">
    <b-navbar-brand href="/">
      <BIconGithub />
      Github Finder
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">{{ $t("navbar.home") }}</b-nav-item>

        <b-nav-item href="/about">{{ $t("navbar.about") }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="$t(currentLang.long)" right>
          <b-dropdown-item
            v-for="(lang, index) in languages"
            :key="index"
            @click="changeLanguage(lang)"
            >{{ $t(lang.long) }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BIconGithub } from "bootstrap-vue";
import { LANGUAGES } from "../assets/data";

export default {
  name: "NavBar",
  components: {
    BIconGithub,
  },
  data() {
    return {
      languages: LANGUAGES,
    };
  },
  computed: {
    currentLang: {
      get() {
        return this.$store.getters.getLanguage;
      },
      set(newValue) {
        this.$store.commit("setLanguage", newValue);
      },
    },
  },
  methods: {
    changeLanguage(language) {
      this.currentLang = language;
    },
  },
};
</script>

<style>
</style>