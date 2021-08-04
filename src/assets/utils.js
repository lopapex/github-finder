import _ from "lodash";
import axios from "axios";
import {
  API_HEADER,
  API_SEARCH_PREFIX,
  API_SEARCH_POSTFIX,
  API_USER,
  API_USER_REPO,
  API_REPO,
  API_REPO_BRANCH,
  API_REPO_COMMIT,
  API_REPO_COMMIT_PAGE,
} from "./data";

export const downloadDebounce = _.debounce(async (commit, name) => {
  await axios
    .get(API_SEARCH_PREFIX + name + API_SEARCH_POSTFIX, API_HEADER)
    .then(({ data }) => {
      commit("setUsers", data.items);
      return;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
}, 100);

export const getUserDetails = async (commit, name) => {
  await axios
    .get(API_USER + name, API_HEADER)
    .then(({ data }) => {
      commit("setSelectedUser", data);
      return;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const getRepositories = async (commit, name, page) => {
  await axios
    .get(API_USER + name + API_USER_REPO + page, API_HEADER)
    .then(({ data }) => {
      commit("setRepositories", data);
      return;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const getBranches = async (commit, name, repository) => {
  await axios
    .get(API_REPO + name + "/" + repository + API_REPO_BRANCH, API_HEADER)
    .then(({ data }) => {
      commit("setBranches", data);
      return;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const getCommits = async (commit, name, repository, branch) => {
  await axios
    .get(
      API_REPO +
        name +
        "/" +
        repository +
        API_REPO_COMMIT +
        branch +
        API_REPO_COMMIT_PAGE,
      API_HEADER
    )
    .then(({ data }) => {
      console.log(data);
      commit("setCommits", data);
      return;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
