<template>
  <div class="login">
    <h1>Login</h1>
    <b-card>
      <b-form @submit.prevent="onSubmit">
        <label for="email">Email</label>
        <b-form-input v-model="email" type="text" name="email" id="email"/>
        <label for="password">Password</label>
        <b-form-input v-model="password" type="password" name="password" id="password"/>
        <b-button class="mt-3" variant="primary" type="submit">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const { email, password } = this;
      this.$http
        .post("/api/auth/login", { email, password })
        .then(({ data }) => this.$emit("saveToken", data.token))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
