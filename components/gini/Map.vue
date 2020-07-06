<template>
  <div>
    <form class="uk-form-horizontal uk-margin-medium-bottom">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Options</legend>
        <div uk-grid class="uk-child-width-1-2@m ">
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
        </div>
      </fieldset>
    </form>
    <div v-show="enableOptions" class="uk-margin-large-bottom">
      Indice de Gini comprit entre :
      <ul class="uk-list uk-child-width-1-3@m uk-flex-center" uk-grid>
        <li v-for="b in bearingFormat" :key="b[0]">
          {{ Math.round(b[0] * 100) / 10000 }} et
          {{ Math.round(b[1] * 100) / 10000 }} :
          <span
            :style="'color:' + giniColor(b[0])"
            uk-icon="paint-bucket"
          ></span>
        </li>
        <li>
          Inconnu :
          <span
            uk-icon="paint-bucket"
            :style="'color:' + giniColor(null)"
          ></span>
        </li>
      </ul>
    </div>
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
import { mapGetters } from 'vuex'
import WorldJson from '~/assets/custom.geo.json'

export default {
  name: 'GiniMap',

  data() {
    return {
      coordinates: [],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      enableOptions: false,
      enableTooltip: true
    }
  },

  computed: {
    ...mapGetters({
      countries: 'gini/countries',
      average: 'gini/average',
      max: 'gini/max',
      min: 'gini/min',
      size: 'gini/size'
    }),

    bearing() {
      return [
        this.min,
        (this.size / 6) * 1 + this.min,
        (this.size / 6) * 2 + this.min,
        (this.size / 6) * 3 + this.min,
        (this.size / 6) * 4 + this.min,
        (this.size / 6) * 5 + this.min,
        (this.size / 6) * 6 + this.min
      ]
    },

    bearingFormat() {
      const bearingFormat = []
      for (let i = 0; i < this.bearing.length - 1; i++) {
        bearingFormat.push([this.bearing[i], this.bearing[i + 1]])
      }
      return bearingFormat
    },
    countriesGini() {
      const countriesGini = {}

      this.countries.forEach((country) => {
        countriesGini[country.alpha3Code] = {
          gini: country.gini,
          translations: country.translations
        }
      })

      return countriesGini
    },

    geojson() {
      WorldJson.features.forEach(async (country) => {
        try {
          country.properties.gini = await this.countriesGini[
            country.properties.iso_a3
          ].gini
          country.properties.fr = await this.countriesGini[
            country.properties.iso_a3
          ].translations.fr

          country.properties.color = await this.giniColor(
            country.properties.gini
          )
        } catch {
          country.properties.gini = null
          country.properties.color = await this.giniColor(null)
        }
      })
      return WorldJson
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
        let gini, name

        if (!feature.properties.gini) {
          gini = 'Inconnu'
        } else {
          gini = Math.round(feature.properties.gini * 100) / 10000
        }

        if (!feature.properties.fr) {
          name = feature.properties.name
        } else {
          name = feature.properties.fr
        }

        return layer.bindTooltip(
          `<div>Pays : ${name}</div><div>Indice de gini : ${gini}</div>`,
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
      if (!gini) {
        return '#666666'
      } else if (gini < this.bearing[1]) {
        return '#00FF00'
      } else if (gini < this.bearing[2]) {
        return '#33CC00'
      } else if (gini < this.bearing[3]) {
        return '#669900'
      } else if (gini < this.bearing[4]) {
        return '#996600'
      } else if (gini < this.bearing[5]) {
        return '#CC3300'
      } else {
        return '#FF0000'
      }
    }
  }
}
</script>
