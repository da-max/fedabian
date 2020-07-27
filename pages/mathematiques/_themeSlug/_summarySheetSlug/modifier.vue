<template>
  <div>
    <summary-sheet-form
      :summary-sheet-id="summarySheet.id"
    ></summary-sheet-form>
  </div>
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
