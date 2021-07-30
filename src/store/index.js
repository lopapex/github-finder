import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: i18n.locale,
    searchText: "",
  },
  mutations: {
    setLanguage(state, newLanguage) {
      localStorage.setItem("language", newLanguage);
      state.language = newLanguage;
      i18n.locale = newLanguage;
    },

    setSearchText(state, newText) {
      state.searchText = newText;
    },
  },
  actions: {},
  getters: {
    getLanguage(state) {
      return state.language;
    },

    getSearchText(state) {
      return state.searchText;
    },
  },
});
