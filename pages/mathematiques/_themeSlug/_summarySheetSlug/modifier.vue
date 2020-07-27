<template>
  <div>
    <h1 class="uk-text-center">Modifier la fiche de révision</h1>
    <alerts></alerts>
    <summary-sheet-form
      :summary-sheet-id="summarySheet.id"
    ></summary-sheet-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SummarySheetForm from '~/components/mathematics/SummarySheetForm'
import Alerts from '~/components/utility/Alerts'

export default {
  name: 'UpdateSummarySheet',
  middleware: ['auth'],
  components: { SummarySheetForm, Alerts },
  computed: {
    ...mapGetters({ summarySheetBySlug: 'mathematics/summarySheetBySlug' }),
    summarySheet() {
      return this.summarySheetBySlug(this.$route.params.summarySheetSlug)
    }
  }
}
</script>
