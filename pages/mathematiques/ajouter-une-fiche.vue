<template>
  <main>
    <header class="uk-margin-large-bottom uk-text-center">
      <h1>Ajouter une fiche de révision</h1>
    </header>
    <mathematics-form></mathematics-form>
  </main>
</template>

<script>
import MathematicsForm from '~/components/Mathematics/Form/Form'

export default {
  name: 'AddSummarySheet',
  middleware: ['auth'],
  components: { MathematicsForm }
}
</script>
