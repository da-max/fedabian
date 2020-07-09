import restcountries from 'restcountries-js'

export const state = () => ({
  allCountries: [],
  countries: [],
  search: '',
  searchCriteria: '',
  searchCriterias: {
    name: {
      name: 'Nom du pays',
      description: ''
    },
    languages: {
      name: 'Langue du pays',
      description: 'Le nom de la langue doit être en anglais.'
    },
    capital: {
      name: 'Capital du pays',
      description: 'Recherche par capital.'
    },
    region: {
      name: 'Région du pays',
      description:
        'Recherche par région (valeur possible : Africa, Americas, Asia, Europe, Oceania).'
    }
  }
})

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  },

  SET_ALL_COUNTRIES(state, countries) {
    state.allCountries = countries
    state.countries = countries
  },

  SET_SEARCH(state, newSearch) {
    state.search = newSearch
    if (state.searchCriteria === 'name') {
      state.countries = state.allCountries.filter(
        (country) => String(country.translations.fr).search(state.search) !== -1
      )
    } else if (state.searchCriteria === 'languages') {
      state.countries = state.allCountries.filter((country) =>
        country.languages.find(
          (language) => language.name.search(state.search) !== -1
        )
      )
    } else {
      state.countries = state.allCountries.filter(
        (country) =>
          String(country[state.searchCriteria]).search(state.search) !== -1
      )
    }
  },

  SET_SEARCH_CRITERIA(state, newCriteria) {
    state.searchCriteria = newCriteria
  }
}

export const getters = {
  countries(state) {
    return state.countries
  },

  searchCriterias(state) {
    return state.searchCriterias
  },

  search(state) {
    return state.search
  },
  resourceBaseUrl(state) {
    return state.resourceBaseUrl
  },

  sorted(state) {
    const gini = state.countries
      .filter((country) => country.gini !== null)
      .map((country) => country.gini)

    return gini.sort((a, b) => a - b)
  },

  average(state) {
    let average = 0
    state.countries
      .filter((country) => country.gini !== null)
      .forEach((country) => (average += country.gini))
    average /=
      state.countries.filter((country) => country.gini !== null).length - 1

    return average
  },

  mediane(_state, getters) {
    const middle = getters.sorted.length / 2
    if (Number.isInteger(middle)) {
      return getters.sorted[middle]
    } else {
      return (
        (getters.sorted[Number.parseInt(middle)] +
          getters.sorted[Number.parseInt(middle)] +
          1) /
        2
      )
    }
  },

  size(_state, getters) {
    return getters.max - getters.min
  },

  max(_state, getters) {
    return getters.sorted[getters.sorted.length - 1]
  },
  min(_state, getters) {
    return getters.sorted[0]
  }
}

export const actions = {
  async getAll({ commit }) {
    try {
      const data = await restcountries().all()
      commit('SET_ALL_COUNTRIES', data)
    } catch (error) {
      if (error.response.status === 404) {
        commit('alerts/ADD_404', {}, { root: true })
      } else if (error.response.status === 500) {
        commit('alerts/ADD_500', {}, { root: true })
      } else {
        commit('alerts/ADD_UNKNOWN', {}, { root: true })
      }
    }
  },

  async getByName({ commit, getters }) {
    try {
      const countries = await restcountries().name(getters.search)

      commit('SET_COUNTRIES', countries)
    } catch (error) {
      if (error.response.status === 404) {
        commit('alerts/ADD_404', {}, { root: true })
      } else if (error.response.status === 500) {
        commit('alerts/ADD_500', {}, { root: true })
      } else {
        commit('alerts/ADD_UNKNOWN', {}, { root: true })
      }
    }
  }
}
