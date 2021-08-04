import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import {
  downloadDebounce,
  getUserDetails,
  getRepositories,
  getBranches,
  getCommits,
} from "../assets/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: i18n.locale,
    searchText: "",
    users: [],
    selectedUser: {},
    repositories: [],
    branches: [],
    commits: [],
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

    setBranches(state, newBranches) {
      state.branches = newBranches;
    },

    setCommits(state, newCommits) {
      state.commits = newCommits;
    },
  },
  actions: {
    async getUsers({ commit }, name) {
      commit("setSearchText", name);
      return downloadDebounce(commit, name);
    },

    async getUserDetails({ commit }, name) {
      return getUserDetails(commit, name);
    },

    async getRepositoriesAPI({ commit }, { name, page }) {
      return getRepositories(commit, name, page);
    },

    async getBranchesAPI({ commit }, { name, repository }) {
      return getBranches(commit, name, repository);
    },

    async getCommitsAPI({ commit }, { name, repository, branch }) {
      return getCommits(commit, name, repository, branch);
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

    getBranches(state) {
      return state.branches;
    },

    getCommits(state) {
      return state.commits;
    },
  },
});
