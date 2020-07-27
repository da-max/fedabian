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

  CHANGE_SUMMARY_SHEET_ELEMENT(state, summarySheet) {
    state.summarySheets.find((sheet) => sheet.id === summarySheet.id)[
      summarySheet.element
    ] = summarySheet.value
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
  },

  async updateSummarySheet({ commit }, summarySheet) {
    await this.$axios.$put(
      `/mathematics/summary-sheets/${summarySheet.slug}`,
      summarySheet
    )
    commit(
      'alerts/ADD_ALERTS',
      {
        header: true,
        headerContent: 'Fiche mise  jour',
        body: 'La fiche de mathématiques a bien été mise à jour.',
        status: 'success',
        close: true
      },
      { root: true }
    )
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
    state.summarySheets.find((summarySheet) => summarySheet.slug === slug),
  summarySheetById: (state) => (id) =>
    state.summarySheets.find((summarySheet) => summarySheet.id === id)
}
