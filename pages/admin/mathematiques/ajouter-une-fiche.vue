<template>
  <main>
    <header class="uk-margin-large-top uk-text-center">
      <h1 class="uk-text-bold">Ajouter une fiche de révision</h1>
    </header>
    <section
      class="uk-margin-large-top uk-margin-large-bottom uk-tile uk-tile-default uk-width-2-3@l uk-width-4-5@m uk-width-5-6 uk-margin-auto uk-border-rounded"
    >
      <add-summary-sheet-form></add-summary-sheet-form>
    </section>
  </main>
</template>

<script>
import AddSummarySheetForm from '~/components/mathematics/AddSummarySheetForm'

export default {
  name: 'AddSummarySheet',
  middleware: ['auth'],
  components: { AddSummarySheetForm }
}
</script>
