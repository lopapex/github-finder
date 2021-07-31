<template>
  <b-card
    @click="viewDetail"
    v-b-hover="handleHover"
    :bg-variant="isHovered ? 'secondary' : 'primary'"
    class="my-3"
  >
    <b-card-title>
      <b-avatar :src="user.avatar_url" size="6rem"></b-avatar>
    </b-card-title>
    <b-card-text class="text-light">
      <strong>{{ user.login }}</strong>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },

    viewDetail() {
      this.$router.push("/users/" + this.user.id);
    },
  },
};
</script>

<style scoped>
.card-body {
  cursor: pointer;
}
</style>