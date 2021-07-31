import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import { downloadDebounce } from "../assets/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: i18n.locale,
    searchText: "",
    users: [],
  },
  mutations: {
    setLanguage(state, newLanguage) {
      state.language = newLanguage;
      localStorage.setItem("language", newLanguage);
      i18n.locale = newLanguage;
    },

    setSearchText(state, newText) {
      state.searchText = newText;
    },

    setUsers(state, newUsers) {
      state.users = state.searchText ? newUsers : [];
    },
  },
  actions: {
    async downloadUsers({ commit }, name) {
      commit("setSearchText", name);
      downloadDebounce(commit, name);
    },
  },
  getters: {
    getLanguage(state) {
      return state.language;
    },

    getSearchText(state) {
      return state.searchText;
    },

    getUsers(state) {
      return state.users;
    },
  },
});
