<template>
  <div>
    <form
      class="uk-form-horizontal	uk-margin-large-bottom uk-child-width-1-2@m"
      uk-grid
    >
      <div>
        <label for="enableOptions" class="uk-form-label"
          >Afficher les couleurs</label
        >
        <div class="uk-form-controls">
          <input
            id="enable-tooltip"
            v-model="enableOptions"
            type="checkbox"
            name="enableOptions"
            class="uk-checkbox"
          />
        </div>
      </div>
      <br />
      <div>
        <label for="enableTooltip" class="uk-form-label"
          >Afficher les infos-bulles</label
        >
        <div class="uk-form-controls">
          <input
            id="enable-tooltip"
            v-model="enableTooltip"
            type="checkbox"
            name="enableTooltip"
            class="uk-checkbox"
          />
        </div>
      </div>
    </form>

    <client-only>
      <div id="map-wrap" style="height: 500px">
        <l-map :zoom="3" :center="[0, 0]">
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-geo-json
            :options="options"
            :geojson="geojson"
            :options-style="styleFunction"
          ></l-geo-json>
        </l-map>
      </div>
    </client-only>
  </div>
</template>

<script>
import WorldJson from '~/assets/custom.geo.json'

export default {
  name: 'GiniMap',

  async fetch() {
    const { data } = await this.$axios.get(
      'https://restcountries.eu/rest/v2/all'
    )

    this.countries = data
  },

  data() {
    return {
      countries: [],
      coordinates: [],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      enableOptions: false,
      enableTooltip: true
    }
  },

  computed: {
    countriesGini() {
      const countriesGini = {}

      this.countries.forEach((country) => {
        countriesGini[country.alpha3Code] = country.gini
      })

      return countriesGini
    },

    average() {
      let average = 0
      this.countries
        .filter((country) => country.gini !== null)
        .forEach((country) => (average += country.gini))
      average /= this.countries.length

      return average
    },

    geojson() {
      WorldJson.features.forEach(async (country) => {
        country.properties.gini = await this.countriesGini[
          country.properties.iso_a3
        ]

        country.properties.color = await this.giniColor(country.properties.gini)
      })
      return WorldJson
    },

    gini() {
      const gini = this.countries
        .filter((country) => country.gini !== null)
        .map((country) => country.gini)
      return gini.sort(function(a, b) {
        return a - b
      })
    },

    max() {
      return this.gini[this.gini.length - 1]
    },

    min() {
      return this.gini[0]
    },

    median() {
      const middle = this.gini.length / 2
      if (Number.isInteger(middle)) {
        return this.gini[middle]
      } else {
        return (
          (this.gini[Number.parseInt(middle)] +
            this.gini[Number.parseInt(middle)] +
            1) /
          2
        )
      }
    },

    styleFunction() {
      if (!this.enableOptions) {
        return () => {}
      }
      return (feature) => ({
        color: feature.properties.color,
        fillOpacity: 0.8
      })
    },

    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      }
    },

    onEachFeatureFunction() {
      if ((!this.enableOptions && !this.enableTooltip) || !this.enableTooltip) {
        return () => {}
      }
      return (feature, layer) => {
        let gini
        if (feature.properties.gini === null) {
          gini = 'Inconnue'
        } else {
          gini = Math.round(feature.properties.gini * 100) / 10000
        }

        return layer.bindTooltip(
          `<div>Pays : ${feature.properties.name}</div><div>Indice de gini : ${gini}</div>`,
          {
            permanent: false,
            sticky: true
          }
        )
      }
    }
  },

  methods: {
    giniColor(gini) {
      if (gini === null || gini === undefined) {
        return '#666666'
      } else if (gini >= 83.3) {
        return '#FF0000'
      } else if (gini >= 66.6) {
        return '#CC3300'
      } else if (gini >= 50) {
        return '#996600'
      } else if (gini >= 33.3) {
        return '#669900'
      } else if (gini >= 16.6) {
        return '#33CC00'
      } else {
        return '#00FF00'
      }
    }
  }
}
</script>
