import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import _ from "lodash";
import axios from "axios";
import { API_USERS_PREFIX, API_USERS_POSTFIX } from "../assets/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: i18n.locale,
    searchText: "",
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
  },
  actions: {
    async downloadUsers({ commit }, name) {
      commit("setSearchText", name);
      const downloadDebounce = _.debounce(async () => {
        await axios
          .get(API_USERS_PREFIX + name + API_USERS_POSTFIX, {
            headers: {
              Authorization: "token " + process.env.VUE_APP_API_KEY, //the token is a variable which holds the token
            },
          })
          .then(({ data }) => {
            console.log(data.items);
          })
          .catch((error) => {
            console.log(error.response.data.message);
          });
      }, 100);
      downloadDebounce();
    },
  },
  getters: {
    getLanguage(state) {
      return state.language;
    },

    getSearchText(state) {
      return state.searchText;
    },
  },
});
