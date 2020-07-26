<template>
  <main class="uk-container">
    <section
      class="uk-light uk-margin-large-top uk-padding uk-margin-large-bottom uk-background-default"
    >
      <p v-if="$fetchState.pending">
        Chargement de l’application mathématiques...
      </p>
      <p v-else-if="$fetchState.error">
        Erreur lors du chargement de l’application mathématiques :
        {{ $fetchState.error.message }}
      </p>
      <div v-else uk-grid>
        <div class="uk-width-1-4@m">
          <mathematics-nav uk-sticky="media: @m; offset: 100">
          </mathematics-nav>
        </div>
        <article class="uk-width-expand">
          <nuxt-child></nuxt-child>
        </article>
        <totop
          class="uk-position-bottom-right uk-position-fixed uk-margin-large-bottom uk-margin-xlarge-right uk-position-z-index"
        ></totop>
      </div>
    </section>
  </main>
</template>

<script>
import MathematicsNav from '~/components/mathematics/Nav'
import Totop from '~/components/utility/Totop'

export default {
  name: 'Mathematics',
  components: { MathematicsNav, Totop },

  async fetch() {
    await this.$store.dispatch('mathematics/getAllSummarySheets')
    await this.$store.dispatch('mathematics/getAllThemes')
  }
}
</script>
