<template>
  <b-modal id="modal" ref="modal" :title="repository" ok-only centered>
    <b-form-select
      class="select"
      v-model="selected"
      :options="options"
      @change="branchChange"
    ></b-form-select>

    <b-table
      thead-class="hidden_header"
      :items="items"
      class="mt-3"
      small
      hover
      no-border-collapse
    >
      >
    </b-table>
    <template #modal-footer="{ ok }">
      <b-button block squared variant="secondary" @click="closeModal(ok)">
        {{ $t("branches.close") }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { MASTER_BRANCH } from "../assets/data";

//TODO IS_BUSY
export default {
  name: "BranchesModal",

  data() {
    return {
      selectLoading: true,
      repository: "",
      selected: MASTER_BRANCH,
    };
  },

  computed: {
    ...mapGetters(["getSelectedUser", "getBranches", "getRepositories"]),
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
    repositories() {
      return this.getRepositories;
    },
    items() {
      return this.repositories.map((repo) => ({
        name: repo.name,
      }));
    },
  },

  methods: {
    ...mapActions(["getBranchesAPI"]),
    show(repository) {
      this.repository = repository;
      this.$refs.modal.show();
      this.updateBranches();
    },

    closeModal(ok) {
      ok();
      this.selected = MASTER_BRANCH;
    },

    branchChange() {
      console.log(this.selected);
    },

    updateBranches() {
      this.selectLoading = true;
      this.getBranchesAPI({
        name: this.user.login,
        repository: this.repository,
      }).then(() => {
        this.selectLoading = false;
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