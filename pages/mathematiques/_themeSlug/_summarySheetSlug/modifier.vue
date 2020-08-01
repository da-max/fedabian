<template>
  <main>
    <header>
      <h1 class="uk-text-center">
        Modifier la fiche : {{ summarySheet.name.toLowerCase() }}
      </h1>
    </header>
    <summary-sheet-form
      :summary-sheet-id="summarySheet.id"
    ></summary-sheet-form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import SummarySheetForm from '~/components/mathematics/SummarySheetForm'

export default {
  name: 'UpdateSummarySheet',
  middleware: ['auth'],
  components: { SummarySheetForm },
  computed: {
    ...mapGetters({ summarySheetBySlug: 'mathematics/summarySheetBySlug' }),
    summarySheet() {
      return this.summarySheetBySlug(this.$route.params.summarySheetSlug)
    }
  }
}
</script>
