<template>
  <div class="box column is-4 is-offset-4 box-login">
    <div class="columns">
      <div class="column has-text-centered">
        <img src="@/static/logo.png" />
      </div>
    </div>

    <div class="columns">
      <div class="column has-text-left">
        <input class="input" type="text" v-model="email" placeholder="Email" />
      </div>
    </div>

    <div class="columns">
      <div class="column has-text-left">
        <input class="input" type="password" v-model="password" placeholder="Password" />
      </div>
    </div>

    <div class="columns">
      <div class="column has-text-centered">
        <nuxt-link to="/" class="button is-danger">Cancel</nuxt-link>
        <nuxt-link to="/admin" class="button is-primary">Login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null
  }),
  layout: 'login'
}
</script>

<style>
.box-login {
  margin-top: 60px;
}
</style>
