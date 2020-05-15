<template>
  <form method="post" class="uk-form-horizontal" @submit.prevent="userLogin">
    <div class="uk-margin-medium-bottom">
      <label for="email" class="uk-form-label">Email</label>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input
          v-model="login.email"
          type="text"
          name="email"
          class="uk-input"
          placeholder="votre email"
        />
      </div>
    </div>
    <div class="uk-margin-medium-bottom">
      <label for="password" class="uk-form-label">Mot de passe</label>
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
        <input
          v-model="login.password"
          type="password"
          name="password"
          class="uk-input"
          placeholder="votre mot de passe"
        />
      </div>
    </div>
    <div class="uk-text-center">
      <input
        type="submit"
        value="Se connecter"
        class="uk-button uk-button-primary"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',

  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.login
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
