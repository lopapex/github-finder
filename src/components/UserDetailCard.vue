<template>
  <div class="user-detail-card text-light">
    <b-card bg-variant="primary" no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img :src="user.avatar_url" class="rounded-0"></b-card-img>
          <b-button
            class="mt-auto"
            @click="viewProfile"
            squared
            block
            variant="secondary"
          >
            {{ $t("userDetails.viewProfile") }}
          </b-button>
        </b-col>
        <b-col md="9">
          <b-card-body>
            <h2>{{ user.login }}</h2>
            <div class="info text-left">
              <p v-if="user.company">
                {{ $tc("userDetails.company", user.company) }}
              </p>
              <p v-if="user.blog">
                {{ $tc("userDetails.blog", user.blog) }}
              </p>
              <p v-if="user.location">
                {{ $tc("userDetails.location", user.location) }}
              </p>
              <p>{{ $tc("userDetails.memberSince", memberSince) }}</p>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
      <template #footer>
        <b-badge class="m-1" variant="danger">
          {{ $tc("userDetails.followers", user.followers) }}
        </b-badge>
        <b-badge class="m-1" variant="success">
          {{ $tc("userDetails.following", user.following) }}
        </b-badge>
        <b-badge class="m-1" variant="dark">
          {{ $tc("userDetails.publicRepos", user.public_repos) }}
        </b-badge>
        <b-badge class="m-1" variant="info">
          {{ $tc("userDetails.publicGists", user.public_gists) }}
        </b-badge>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserDetailCard",

  computed: {
    ...mapGetters(["getSelectedUser", "getLanguage"]),
    user() {
      return this.getSelectedUser;
    },
    memberSince() {
      let date = new Date(this.user.created_at);
      return date.toLocaleDateString(this.getLanguage);
    },
  },

  methods: {
    viewProfile() {
      window.open(this.user.html_url, "_blank");
    },
  },
};
</script>



