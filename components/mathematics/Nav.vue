<template>
  <p v-if="$fetchState.pending">Chargement du menu de navigation ...</p>
  <p v-else-if="$fetchState.error">
    Erreur lors du chargement de la barre de navigation :
    {{ $fetchState.error.message }}
  </p>
  <nav v-else>
    <ul class="uk-nav uk-nav-default uk-nav-parent-icon" uk-nav>
      <li v-for="theme in themes" :key="theme.id" class="uk-parent">
        <a href="#">{{ theme.name }}</a>
        <ul class="uk-nav-sub">
          <li
            v-for="summarySheet in filterSummarySheets(theme.id)"
            :key="summarySheet.id"
          >
            <nuxt-link :to="'/mathematiques/' + summarySheet.id">{{
              summarySheet.name
            }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MathmeticsNav',
  async fetch() {
    this.summarySheets = await this.$axios.$get('/mathematics/summary-sheets')
    this.themes = await this.$axios.$get('/mathematics/themes')
  },
  data() {
    return {
      summarySheets: [],
      themes: []
    }
  },
  methods: {
    filterSummarySheets(themeId) {
      return this.summarySheets.filter(
        (summarySheet) => summarySheet.themeId === themeId
      )
    }
  }
}
</script>
