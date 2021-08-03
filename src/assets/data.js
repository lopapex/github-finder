export const LANGUAGES = [
  { short: "en", long: "navbar.languages.en" },
  { short: "cs", long: "navbar.languages.cz" },
];

export const API_HEADER = {
  headers: {
    Authorization: "token " + process.env.VUE_APP_API_KEY, //the token is a variable which holds the token
  },
};

export const API_URL = "https://api.github.com";

export const API_SEARCH_PREFIX = `${API_URL}/search/users?q=`;
export const API_SEARCH_POSTFIX = " in:user";
export const API_USER = `${API_URL}/users/`;
export const REPO_PER_PAGE = 30;
export const API_USER_REPO = `/repos?per_page=${REPO_PER_PAGE}&page=`;
export const API_REPO = `${API_URL}/repos/`;
export const API_REPO_BRANCH = `/branches`;
export const MASTER_BRANCH = `master`;
