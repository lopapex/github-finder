<template>
  <b-modal id="modal" ref="modal" :title="repository">
    <p class="my-4">Lorem ipsum</p>
  </b-modal>
</template>

<script>
export default {
  name: "BranchesModal",
  props: {
    repository: {
      type: String,
      required: true,
    },
  },
  methods: {
    show() {
      this.$refs.modal.show();
    },
  },
};
</script>