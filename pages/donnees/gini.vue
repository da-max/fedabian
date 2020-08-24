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
          <gini-nav class="uk-margin-large-bottom"></gini-nav>
          <div class="uk-margin-large-bottom uk-text-center">
            <gini-search-bar></gini-search-bar>
          </div>
          <div>
            <div>
              <span class="uk-label">Moyenne</span>
              {{ Math.round(average * 100) / 10000 }}
            </div>
            <div>
              <span class="uk-label">Médiane</span>
              <span v-if="isNaN(mediane)">Inconnu</span>
              <span v-else>
                {{ Math.round(mediane * 100) / 10000 }}
              </span>
            </div>
            <div>
              <span class="uk-label">Minimum</span>
              <span v-if="isNaN(min)">Inconnu</span>
              <span v-else>
                {{ Math.round(min * 100) / 10000 }} ({{ minCountry }})</span
              >
            </div>
            <div>
              <span class="uk-label">Maximum</span>
              <span v-if="isNaN(max)">Inconnu</span>
              <span v-else>
                {{ Math.round(max * 100) / 10000 }} ({{ maxCountry }})</span
              >
            </div>
          </div>
        </div>
        <section class="uk-width-expand">
          <alerts></alerts>
          <nuxt-child></nuxt-child>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import GiniNav from '~/components/Gini/Nav'
import GiniSearchBar from '~/components/Gini/SearchBar'
import Alerts from '~/components/Utils/Alerts'

export default {
  name: 'Gini',
  components: { GiniNav, GiniSearchBar, Alerts },

  async fetch() {
    await this.$store.dispatch('gini/getAll')
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
      try {
        return this.countries.find((c) => c.gini === this.min).translations.fr
      } catch {
        return 'Inconnu'
      }
    },
    maxCountry() {
      try {
        return this.countries.find((c) => c.gini === this.max).translations.fr
      } catch {
        return 'Inconnu'
      }
    }
  },

  head() {
    return {
      title: 'Coefficient de Gini | Fedabian',
      meta: [
        {
          hib: 'description-page',
          name: 'description',
          content:
            'Application permettant de visualiser les coefficients de Gini des différents pays du monde.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Coefficient de Gini, coefficient de Gini dans le monde'
        }
      ]
    }
  }
}
</script>
