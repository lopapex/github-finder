<template>
  <b-navbar type="dark" toggleable="sm" variant="secondary">
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
        <b-nav-item-dropdown :text="$t(currentLanguageLong)" right>
          <b-dropdown-item
            v-for="(language, index) in languages"
            :key="index"
            @click="changeLanguage(language.short)"
          >
            {{ $t(language.long) }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BIconGithub } from "bootstrap-vue";
import { LANGUAGES } from "../assets/data";
import { mapGetters, mapMutations } from "vuex";

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
    ...mapGetters(["getLanguage"]),
    currentLanguage: {
      get() {
        return this.getLanguage;
      },
      set(newValue) {
        this.setLanguage(newValue);
      },
    },
    currentLanguageLong() {
      return this.languages.find(
        (language) => language.short == this.currentLanguage
      ).long;
    },
  },
  methods: {
    ...mapMutations(["setLanguage"]),
    changeLanguage(language) {
      this.currentLanguage = language;
    },
  },
};
</script>

<style>
</style>