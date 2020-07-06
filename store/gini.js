export const state = () => ({
  countries: []
})

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  }
}

export const getters = {
  countries(state) {
    return state.countries
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

  mediane(state, getters) {
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
