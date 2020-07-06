<template>
  <main class="uk-margin-large-top">
    <h1 class="uk-text-center uk-text-bold uk-margin-large-bottom">
      Coefficient de Gini
    </h1>
    <div
      class="uk-container uk-background-default uk-padding uk-margin-large-bottom uk-light"
    >
      <div uk-grid>
        <div class="uk-width-1-4@m">
          <div uk-sticky="offset: 20px; media: @m">
            <gini-nav class="uk-margin-large-bottom"></gini-nav>
            <div>
              <div>
                <span class="uk-label">Moyenne</span>
                {{ Math.round(average * 100) / 10000 }}
              </div>
              <div>
                <span class="uk-label">Médiane</span>
                {{ Math.round(mediane * 100) / 10000 }}
              </div>
              <div>
                <span class="uk-label">Minimum</span>
                {{ Math.round(min * 100) / 10000 }} ({{ minCountry }})
              </div>
              <div>
                <span class="uk-label">Maximum</span>
                {{ Math.round(max * 100) / 10000 }} ({{ maxCountry }})
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-expand">
          <nuxt-child></nuxt-child>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import GiniNav from '~/components/gini/Nav'

export default {
  name: 'Gini',
  components: { GiniNav },

  async fetch() {
    const { data } = await this.$axios.get(
      'https://restcountries.eu/rest/v2/all'
    )
    this.$store.commit('gini/SET_COUNTRIES', data)
  },
  computed: {
    ...mapGetters({
      average: 'gini/average',
      mediane: 'gini/mediane',
      min: 'gini/min',
      max: 'gini/max',
      countries: 'gini/countries'
    }),
    minCountry() {
      return this.countries.find((c) => c.gini === this.min).translations.fr
    },
    maxCountry() {
      return this.countries.find((c) => c.gini === this.max).translations.fr
    }
  }
}
</script>
