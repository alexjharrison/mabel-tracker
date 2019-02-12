<template>
  <div id="app">
    <div id="nav">
      <p>Username: {{ this.$store.state.user.username}}</p>
      <p>Email: {{ this.$store.state.user.email}}</p>
      <p>Token: {{ this.$store.state.jwtToken}}</p>
      <b-nav tabs>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Login">Login</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Register">Register</router-link>
        </b-nav-item>
        <b-nav-item @click="logout">Logout</b-nav-item>
      </b-nav>
    </div>
    <router-view class="m-4" @saveToken="saveToken"/>
  </div>
</template>

<script>
export default {
  mounted() {
    const token = localStorage.token;
    if (token) this.saveToken(token);
  },
  methods: {
    saveToken(token) {
      localStorage.setItem("token", token);
      this.$http.defaults.headers.common["Authorization"] = "Bearer " + token;
      if (token) {
        this.$http
          .get("/api/user/")
          .then(({ data }) => {
            this.$store.commit("setUser", data);
            this.$store.commit("setJwt", token);
            this.$router.push("/");
          })
          .catch(() => {
            localStorage.removeItem("token");
          });
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setUser", {});
      this.$store.commit("setJwt", "");
      this.$router.push("/login");
    }
  }
};
</script>


<style lang="scss">
.card {
  max-width: 400px;
}
</style>

