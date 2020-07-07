import restcountries from 'restcountries-js'

export const state = () => ({
  countries: [],
  search: ''
})

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  },

  SET_SEARCH(state, newSearch) {
    state.search = newSearch
  }
}

export const getters = {
  countries(state) {
    return state.countries
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
      commit('SET_COUNTRIES', data)
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
