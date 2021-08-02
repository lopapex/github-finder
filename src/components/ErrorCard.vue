<template>
  <div class="error-card">
    <b-card bg-variant="primary">
      <b-card-text class="text-light">
        {{ message }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ErrorCard",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>