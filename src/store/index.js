import Vue from "vue";
import Vuex from "vuex";
import { LANGUAGES } from "../assets/data";
import i18n from "../i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language:
      JSON.parse(localStorage.getItem("lang")) ??
      LANGUAGES.find((lang) => lang.short == i18n.locale),
  },
  mutations: {
    setLanguage(state, newLanguage) {
      localStorage.setItem("lang", JSON.stringify(newLanguage));
      state.language = newLanguage;
      i18n.locale = newLanguage.short;
    },
  },
  actions: {},
  getters: {
    getLanguage(state) {
      return state.language;
    },
  },
});
