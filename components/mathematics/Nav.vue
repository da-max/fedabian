<template>
  <nav>
    <ul class="uk-nav uk-nav-default uk-nav-parent-icon" uk-nav>
      <li v-for="theme in themes" :key="theme.id" class="uk-parent">
        <a href="#">{{ theme.name }}</a>
        <ul class="uk-nav-sub">
          <li
            v-for="summarySheet in filterSummarySheets(theme.id)"
            :key="summarySheet.id"
          >
            <nuxt-link
              :to="`/mathematiques/${theme.slug}/${summarySheet.slug}`"
              >{{ summarySheet.name }}</nuxt-link
            >
          </li>
        </ul>
      </li>
      <li v-if="$store.state.auth.loggedIn" class="uk-nav-divider"></li>
      <li v-if="$store.state.auth.loggedIn && $route.params.summarySheetSlug">
        <nuxt-link
          :to="
            `/mathematiques/${$route.params.themeSlug}/${$route.params.summarySheetSlug}/modifier`
          "
          >Modifier cette fiche</nuxt-link
        >
      </li>
      <li v-if="$store.state.auth.loggedIn && $route.params.summarySheetSlug">
        <a uk-toggle="target: #delete-summary-sheet" type="button">
          Supprimer cette fiche
        </a>
        <modal id="delete-summary-sheet" class="uk-light">
          <template #header>
            <h3>
              Supprimer la fiche «
              {{ summarySheetCurrent.name.toLowerCase() }} »
            </h3>
          </template>
          <template #body>
            <p>
              Vous êtes sur le point de supprimer la fiche «
              {{ summarySheetCurrent.name.toLowerCase() }} ».
              <span class="uk-text-warning"
                >Attention, cette action est irréversible !</span
              >
            </p>
          </template>
          <template #footer>
            <button
              class="uk-button uk-button-danger uk-margin-medium-right"
              @click.prevent="deleteCurrentSummarySheet()"
            >
              Supprimer cette fiche
            </button>
            <button
              class="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Annuler
            </button>
          </template>
        </modal>
      </li>
      <li v-if="$store.state.auth.loggedIn">
        <nuxt-link to="/mathematiques/ajouter-une-fiche"
          >Ajouter une fiche de révision</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../utility/Modal'
export default {
  name: 'MathmeticsNav',

  components: { Modal },

  computed: {
    ...mapGetters({
      themes: 'mathematics/themes',
      summarySheets: 'mathematics/summarySheets',
      summarySheetBySlug: 'mathematics/summarySheetBySlug'
    }),
    summarySheetCurrent() {
      if (this.$route.params.summarySheetSlug) {
        return this.summarySheetBySlug(this.$route.params.summarySheetSlug)
      } else {
        return {}
      }
    }
  },
  methods: {
    ...mapActions({ deleteSummarySheet: 'mathematics/deleteSummarySheet' }),
    filterSummarySheets(themeId) {
      return this.summarySheets.filter(
        (summarySheet) => summarySheet.themeId === themeId
      )
    },
    async deleteCurrentSummarySheet() {
      await this.$uikit.modal('#delete-summary-sheet').hide()
      this.$router.push('/mathematiques')
      this.deleteSummarySheet(this.summarySheetCurrent.slug)
    }
  }
}
</script>
