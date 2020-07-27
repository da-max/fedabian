<template>
  <div>
    <header class="uk-margin-large-bottom uk-text-center">
      <h1>Ajouter une fiche de révision</h1>
    </header>
    <summary-sheet-form></summary-sheet-form>
  </div>
</template>

<script>
import SummarySheetForm from '~/components/mathematics/SummarySheetForm'

export default {
  name: 'AddSummarySheet',
  middleware: ['auth'],
  components: { SummarySheetForm }
}
</script>
