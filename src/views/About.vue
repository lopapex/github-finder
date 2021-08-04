<template>
  <div class="about">
    <h2 class="mt-2">{{ $t("about.title") }}</h2>
    <div>
      <div class="pb-2">
        <p v-html="$t('about.text')"></p>
      </div>
      <div>
        <p
          style="margin-bottom: 0px"
          v-html="$t('about.info', { version: currVersion })"
        ></p>
        <p>
          <b style="padding-right: 5px">{{ $t("about.repo") }}</b>
          <span class="link" @click="moreInfo">Github</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { REPO_URL } from "../assets/data";
import { version } from "../../package.json";

export default {
  name: "About",
  data: () => ({
    currVersion: version,
  }),

  methods: {
    moreInfo() {
      window.open(REPO_URL, "_blank");
    },
  },
};
</script>

<style scoped>
.link {
  color: var(--secondary);
}

.link:hover {
  cursor: pointer;
  text-decoration-line: underline;
}
</style>