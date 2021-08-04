<template>
  <b-modal id="modal" ref="modal" :title="repository" ok-only centered>
    <b-form-select
      class="select"
      v-model="selectedBranch"
      :options="options"
      @change="branchChange"
    ></b-form-select>

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
        <Loading class="my-2" />
      </template>
    </b-table>

    <template #modal-footer="{ ok }">
      <b-button block squared variant="secondary" @click="ok()">
        {{ $t("branches.close") }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { MASTER_BRANCH } from "../assets/data";
import Loading from "./Loading.vue";

export default {
  name: "BranchesModal",
  components: {
    Loading,
  },

  data() {
    return {
      selectLoading: true,
      isBusy: true,
      repository: "",
      selectedBranch: MASTER_BRANCH,
    };
  },

  computed: {
    ...mapGetters(["getSelectedUser", "getBranches", "getCommits"]),
    user() {
      return this.getSelectedUser;
    },
    branches() {
      return this.getBranches;
    },
    options() {
      return this.selectLoading
        ? [{ value: MASTER_BRANCH, text: this.$t("branches.loading") }]
        : this.getBranches.map((branch) => ({
            text: branch.name,
            value: branch.name,
          }));
    },
    commits() {
      return this.getCommits;
    },
    items() {
      return this.getCommits.map((commit) => ({
        name: commit.commit.message,
      }));
    },
  },

  methods: {
    ...mapActions(["getBranchesAPI", "getCommitsAPI"]),
    show(repository) {
      this.selectedBranch = MASTER_BRANCH;
      this.repository = repository;
      this.$refs.modal.show();
      this.updateBranches();
    },

    branchChange() {
      this.updateCommits();
    },

    updateBranches() {
      this.selectLoading = true;
      this.getBranchesAPI({
        name: this.user.login,
        repository: this.repository,
      }).then(() => {
        // if master branch does not exist
        if (!this.branches.find((branch) => branch.name == MASTER_BRANCH)) {
          this.selectedBranch = this.branches[0].name;
        }
        this.updateCommits();
        this.selectLoading = false;
      });
    },

    updateCommits() {
      this.isBusy = true;
      console.log("");
      this.getCommitsAPI({
        name: this.user.login,
        repository: this.repository,
        branch: this.selectedBranch,
      }).then(() => {
        this.isBusy = false;
      });
    },
  },
};
</script>

<style scoped>
.select {
  background: var(--secondary);
  color: white;
}
</style>