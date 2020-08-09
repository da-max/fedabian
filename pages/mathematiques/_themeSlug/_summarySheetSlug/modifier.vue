<template>
  <main>
    <header class="uk-margin-large-bottom">
      <h1 class="uk-text-center">
        Modifier la fiche : {{ summarySheet.name.toLowerCase() }}
      </h1>
    </header>

    <mathematics-form :summary-sheet-id="summarySheet.id"></mathematics-form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import MathematicsForm from '~/components/mathematics/form/Form'

export default {
  name: 'UpdateSummarySheet',
  middleware: ['auth'],
  components: { MathematicsForm },

  computed: {
    ...mapGetters({ summarySheetBySlug: 'mathematics/summarySheetBySlug' }),
    summarySheet() {
      return this.summarySheetBySlug(this.$route.params.summarySheetSlug)
    }
  }
}
</script>
