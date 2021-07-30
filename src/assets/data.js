export const LANGUAGES = [
  { short: "en", long: "navbar.languages.en" },
  { short: "cz", long: "navbar.languages.cz" },
];

export const API_USERS_PREFIX = "https://api.github.com/search/users?q=";
export const USER_COUNT = 30;
export const API_USERS_POSTFIX = ` in:user&access_token=${process.env.VUE_APP_API_KEY}&per_page=${USER_COUNT}`;
