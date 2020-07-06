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
            <gini-nav></gini-nav>
            <hr />
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
        <section class="uk-width-expand uk-article">
          <h2 class="uk-text-center  uk-article-title">
            L’indice de Gini dans le monde
          </h2>
          <hr />
          <ul uk-accordion="multiple: true">
            <li class="uk-open">
              <a class="uk-accordion-title">Carte du coefficient de Gini</a>
              <div class="uk-accordion-content">
                <gini-map></gini-map>
              </div>
            </li>
            <li>
              <a class="uk-accordion-title">Le coefficient de Gini par pays</a>
              <div class="uk-accordion-content uk-overflow-auto">
                <gini-table></gini-table>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import GiniNav from '~/components/gini/Nav'
import GiniMap from '~/components/gini/Map'
import GiniTable from '~/components/gini/Table'

export default {
  name: 'GiniWorld',
  components: { GiniNav, GiniMap, GiniTable },
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
