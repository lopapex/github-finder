<template>
  <div class="overflow-auto">
    <h2 class="mt-3">{{ $t("repositories.title") }}</h2>

    <ErrorCard
      v-if="repositories.length == 0 && !isBusy"
      :message="$tc('repositories.empty', user.login)"
    />

    <b-pagination
      v-if="perPage < user.public_repos"
      v-model="currentPage"
      :total-rows="user.public_repos"
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
      @row-clicked="showModal"
    >
      >
      <template #table-busy>
        <Loading class="my-2" />
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
    <BranchesModal :repository="currentRepository" ref="branchesModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { REPO_PER_PAGE } from "../assets/data";
import Loading from "./Loading.vue";
import ErrorCard from "./ErrorCard.vue";
import BranchesModal from "./BranchesModal.vue";

export default {
  name: "User",
  components: {
    Loading,
    ErrorCard,
    BranchesModal,
  },
  data() {
    return {
      perPage: REPO_PER_PAGE,
      currentPage: 1,
      isBusy: true,
      currentRepository: "",
    };
  },

  mounted() {
    this.updateRepositories();
  },

  computed: {
    ...mapGetters(["getSelectedUser", "getRepositories"]),
    user() {
      return this.getSelectedUser;
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
    showModal({ name }) {
      console.log(name);
      this.currentRepository = name;
      this.$refs.branchesModal.show();
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