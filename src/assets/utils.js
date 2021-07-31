import _ from "lodash";
import axios from "axios";
import { API_HEADER, API_USERS_PREFIX, API_USERS_POSTFIX } from "./data";

export const downloadDebounce = _.debounce(async (commit, name) => {
  await axios
    .get(API_USERS_PREFIX + name + API_USERS_POSTFIX, API_HEADER)
    .then(({ data }) => {
      commit("setUsers", data.items);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
}, 100);
