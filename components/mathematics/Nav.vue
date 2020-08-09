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
      <li v-show="$store.state.auth.loggedIn" class="uk-nav-divider"></li>
      <li v-show="$store.state.auth.loggedIn">
        <div class="uk-flex uk-flex-around uk-margin-small-top">
          <nuxt-link
            v-if="$route.params.summarySheetSlug"
            :to="
              `/mathematiques/${$route.params.themeSlug}/${$route.params.summarySheetSlug}/modifier`
            "
            class="uk-icon-link"
            title="Modifier cette fiche"
            uk-icon="icon: pencil; ratio: 1.25"
          ></nuxt-link>
          <a
            v-if="$route.params.summarySheetSlug"
            uk-toggle="target: #delete-summary-sheet"
            type="button"
            class="uk-icon-link"
            title="Supprimer cette fiche"
            uk-icon="icon: trash; ratio: 1.25"
          >
          </a>
          <nuxt-link
            to="/mathematiques/ajouter-une-fiche"
            class="uk-icon-link"
            title="Ajouter une fiche"
            uk-icon="icon: plus; ratio: 1.25"
          ></nuxt-link>
          <modal
            v-if="$route.params.summarySheetSlug"
            id="delete-summary-sheet"
            class="uk-light"
          >
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
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../utility/Modal'
export default {
  name: 'MathematicsNav',

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
