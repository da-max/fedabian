<template>
  <div>
    <form>
      <div class="uk-margin-small-bottom">
        <div class="uk-margin-medium-bottom">
          <label for="searchCriteria" class="uk-form-label"
            >Critère de recherche</label
          >
          <select
            id="search-criteria"
            v-model="searchCriteria"
            name="searchCriteria"
            class="uk-select"
          >
            <option
              v-for="criteria in Object.keys(searchCriterias)"
              :key="criteria"
              :value="criteria"
            >
              {{ searchCriterias[criteria].name }}
            </option>
          </select>
          <p v-if="searchCriteria === ''"></p>
          <p
            v-else
            class="uk-text-muted"
            v-html="searchCriterias[searchCriteria].description"
          ></p>
        </div>
        <div v-show="searchCriteria !== ''">
          <label for="search" class="uk-form-label">Recherche</label>
          <input
            id="search-countries"
            v-model="search"
            type="search"
            name="searchCountries"
            class="uk-input"
            placeholder="Rechercher un nom de pays"
          />
        </div>
      </div>
      <button
        v-show="search !== ''"
        type="button"
        class="uk-button uk-button-text uk-button-small uk-margin-right"
        @click.prevent="resetSearch()"
      >
        Réinitialiser
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'GiniSearchBar',

  computed: {
    ...mapGetters({ searchCriterias: 'gini/searchCriterias' }),
    search: {
      get() {
        return this.$store.state.gini.search
      },
      set(newSearch) {
        this.$store.commit('gini/SET_SEARCH', newSearch)
      }
    },
    searchCriteria: {
      get() {
        return this.$store.state.gini.searchCriteria
      },
      set(newCriteria) {
        this.$store.commit('gini/SET_SEARCH_CRITERIA', newCriteria)
      }
    }
  },
  methods: {
    ...mapActions({ getAll: 'gini/getAll' }),
    resetSearch() {
      this.search = ''
      this.getAll()
    }
  }
}
</script>
