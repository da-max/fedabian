<template>
  <div class="uk-padding-large uk-light">
    <alerts />
    <card class="uk-width-1-2@l uk-margin-auto" :header="true" :padding="true">
      <template #header>
        <h1 class="uk-text-center uk-text-bold">Se connecter</h1>
      </template>
      <template #body>
        <login-form class="uk-margin-large-top" />
      </template>
    </card>
  </div>
</template>

<script>
import Card from '~/components/Utils/Card'
import LoginForm from '~/components/Auth/LoginForm'
import Alerts from '~/components/Utils/Alerts'
export default {
  name: 'Login',
  components: {
    Card,
    LoginForm,
    Alerts
  }
}
</script>
