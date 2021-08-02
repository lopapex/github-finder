<template>
  <div class="overflow-auto">
    <h2 class="mt-5">Repositories:</h2>

    <b-pagination
      v-if="perPage < rows"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      pills
      align="fill"
    ></b-pagination>

    <b-table
      thead-class="hidden_header"
      :items="items"
      :busy="isBusy"
      class="mt-3"
      small
      hover
      no-border-collapse
    >
      <template #table-busy>
        <div class="text-center text-secondary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(link)="data">
        <b-button
          class="mt-auto"
          size="sm"
          @click="viewRepo(data.value)"
          pill
          small
          variant="secondary"
        >
          {{ $t("repositories.link") }}
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { REPO_PER_PAGE } from "../assets/data";

export default {
  name: "User",
  data() {
    return {
      perPage: REPO_PER_PAGE,
      currentPage: 1,
      isBusy: true,
    };
  },

  mounted() {
    this.updateRepositories();
  },

  computed: {
    ...mapGetters(["getSelectedUser", "getRepositories"]),
    rows() {
      return this.getSelectedUser.public_repos;
    },
    repositories() {
      return this.getRepositories;
    },
    items() {
      return this.repositories.map((repo) => ({
        name: repo.name,
        link: repo.html_url,
      }));
    },
  },

  watch: {
    currentPage(newPage) {
      this.currentPage = newPage;
      this.updateRepositories();
    },
  },

  methods: {
    ...mapActions(["getRepositoriesAPI"]),
    viewRepo(url) {
      window.open(url, "_blank");
    },
    updateRepositories() {
      this.isBusy = true;
      this.getRepositoriesAPI({
        name: this.$route.params.login,
        page: this.currentPage,
      }).then(() => {
        this.isBusy = false;
      });
    },
  },
};
</script>

<style>
.hidden_header {
  display: none;
}

.page-item .page-link {
  color: var(--light);
}

.page-item .page-link {
  background-color: var(--primary);
  border-color: var(--primary);
}

.page-item.disabled .page-link {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--light);
}

.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background-color: var(--light);
  cursor: pointer;
}

.table-hover tbody tr td,
.table-hover tbody tr th {
  background-color: var(--primary);
  border: 1px solid var(--secondary);
}
</style>