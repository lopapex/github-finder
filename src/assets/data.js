export const LANGUAGES = [
  { short: "en", long: "navbar.languages.en" },
  { short: "cz", long: "navbar.languages.cz" },
];

export const API_HEADER = {
  headers: {
    Authorization: "token " + process.env.VUE_APP_API_KEY, //the token is a variable which holds the token
  },
};

export const API_URL = "https://api.github.com";

export const API_USERS_PREFIX = `${API_URL}/search/users?q=`;
export const API_USERS_POSTFIX = " in:user";
export const API_SELECTED_USER = `${API_URL}/users/`;
