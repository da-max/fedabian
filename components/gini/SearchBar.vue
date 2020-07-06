<template>
  <div>
    <form @submit.prevent="search()">
      <div class="uk-margin-small-bottom">
        <input
          id="search-countries"
          v-model="searchCountry"
          type="search"
          name="searchCountries"
          class="uk-input"
          placeholder="Rechercher un nom de pays"
        />
      </div>
      <button
        v-show="searchCountry !== ''"
        class="uk-button uk-button-danger uk-button-small uk-margin-right"
      >
        Annuler
      </button>
      <input
        type="submit"
        value="Rechercher"
        class="uk-button uk-button-primary uk-button-small"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'GiniSearchBar',

  computed: {
    searchCountry: {
      get() {
        return this.$store.state.gini.search
      },
      set(newSearch) {
        this.$store.commit('gini/SET_SEARCH', newSearch)
      }
    }
  },
  methods: {
    ...mapActions({ search: 'gini/getByName' })
  }
}
</script>
