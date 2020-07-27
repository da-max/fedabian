export const state = () => ({
  summarySheets: [],
  themes: []
})

export const mutations = {
  SET_THEMES(state, themes) {
    state.themes = themes
  },

  ADD_THEMES(state, themes) {
    state.themes.push(themes)
  },

  SET_SUMMARY_SHEETS(state, summarySheets) {
    state.summarySheets = summarySheets
  },

  ADD_SUMMARY_SHEETS(state, summarySheets) {
    state.summarySheets.push(summarySheets)
  }
}

export const actions = {
  async getAllThemes({ commit }) {
    const themes = await this.$axios.$get('/mathematics/themes')
    commit('SET_THEMES', themes)
  },

  async getAllSummarySheets({ commit }) {
    const summarySheets = await this.$axios.$get('/mathematics/summary-sheets')
    commit('SET_SUMMARY_SHEETS', summarySheets)
  },

  async addTheme({ commit }, theme) {
    const response = await this.$axios.$post('/mathematics/themes', theme)
    commit('ADD_THEMES', response)
  },

  async addSummarySheet({ commit }, summarySheet) {
    const response = await this.$axios.$post(
      '/mathematics/summary-sheets',
      summarySheet
    )
    commit('ADD_SUMMARY_SHEETS', response)
  }
}

export const getters = {
  themes(state) {
    return state.themes
  },
  summarySheets(state) {
    return state.summarySheets
  },
  summarySheetBySlug: (state) => (slug) =>
    state.summarySheets.find((summarySheet) => summarySheet.slug === slug)
}
