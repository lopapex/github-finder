import _ from "lodash";
import axios from "axios";
import {
  API_HEADER,
  API_SEARCH_PREFIX,
  API_SEARCH_POSTFIX,
  API_USERS,
  API_REPO,
} from "./data";

export const downloadDebounce = _.debounce(async (commit, name) => {
  await axios
    .get(API_SEARCH_PREFIX + name + API_SEARCH_POSTFIX, API_HEADER)
    .then(({ data }) => {
      commit("setUsers", data.items);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
}, 100);

export const getUserDetails = async (commit, name) => {
  await axios
    .get(API_USERS + name, API_HEADER)
    .then(({ data }) => {
      commit("setSelectedUser", data);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const getRepositories = async (commit, name, page) => {
  await axios
    .get(API_USERS + name + API_REPO + page, API_HEADER)
    .then(({ data }) => {
      commit("setRepositories", data);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
