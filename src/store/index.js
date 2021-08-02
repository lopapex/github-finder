import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import {
  downloadDebounce,
  getUserDetails,
  getRepositories,
} from "../assets/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: i18n.locale,
    searchText: "",
    users: [],
    selectedUser: {},
    repositories: [],
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

    setSelectedUser(state, newSelectedUser) {
      state.selectedUser = newSelectedUser;
    },

    setRepositories(state, newRepositories) {
      state.repositories = newRepositories;
    },
  },
  actions: {
    async getUsers({ commit }, name) {
      commit("setSearchText", name);
      downloadDebounce(commit, name);
    },

    async getUserDetails({ commit }, name) {
      getUserDetails(commit, name);
    },

    async getRepositoriesAPI({ commit }, { name, page }) {
      getRepositories(commit, name, page);
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

    getSelectedUser(state) {
      return state.selectedUser;
    },

    getRepositories(state) {
      return state.repositories;
    },
  },
});
