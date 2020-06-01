<template>
  <div
    class="uk-margin-large-top uk-width-2-5@l uk-width-2-3@m uk-margin-auto"
    uk-height-viewport="offset-top: true; offset-bottom:true"
  >
    <alert
      v-if="error.statusCode === 404"
      :close="false"
      status="warning"
      :header="true"
    >
      <template #header>
        Page non trouvée
      </template>
      <template #body>
        La page demandée n’a pas été trouvée, vous pouvez cliquer
        <nuxt-link to="/">ici</nuxt-link> afin de retourner à l’accueil.
      </template>
    </alert>
    <alert
      v-if="error.statusCode === 500"
      :close="false"
      status="danger"
      :header="true"
    >
      <template #header>
        Erreur interne
      </template>
      <template #body>
        <span class="uk-text-bold">Une erreur est survenue</span>, merci de
        réessayer ultérieurement ou de me contacter à l’adresse :
        <span class="uk-text-bold">maxime.benhassen@tutanota.com</span>
      </template>
    </alert>
  </div>
</template>

<script>
import Alert from '~/components/utility/Alert'
export default {
  components: {
    Alert
  },

  props: {
    error: {
      type: Object,
      default() {
        return Object()
      }
    }
  }
}
</script>
