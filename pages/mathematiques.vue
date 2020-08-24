<template>
  <main class="uk-container">
    <div
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
          <client-only>
            <mathematics-nav uk-sticky="media: @m; offset: 100">
            </mathematics-nav>
          </client-only>
        </div>
        <section class="uk-width-expand">
          <nuxt-child></nuxt-child>
        </section>
        <totop
          class="uk-position-bottom-right uk-position-fixed uk-margin-large-bottom uk-margin-xlarge-right uk-position-z-index"
        ></totop>
      </div>
    </div>
  </main>
</template>

<script>
import MathematicsNav from '~/components/Mathematics/Nav'
import Totop from '~/components/Utils/Totop'

export default {
  name: 'Mathematics',
  components: { MathematicsNav, Totop },

  async fetch() {
    await this.$store.dispatch('mathematics/getAllSummarySheets')
    await this.$store.dispatch('mathematics/getAllThemes')
  }
}
</script>
