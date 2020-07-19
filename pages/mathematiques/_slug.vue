<template>
  <p v-if="$fetchState.pending">Chargement de la fiche ...</p>
  <p v-else-if="$fetchState.error">
    Erreur lors du chargement de la fiche :
    {{ $fetchState.error.message }}
  </p>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-else v-html="$md.render(content)"></div>
</template>

<script>
export default {
  name: 'MathematicsSummarySheet',
  async fetch() {
    this.summarySheet = await this.$axios.$get(
      `/mathematics/summary-sheets/${this.$route.params.slug}`
    )
    this.content = await this.$mathematicsApi.$get(
      `${this.summarySheet.url}/raw?ref=master`
    )
  },
  data() {
    return {
      content: '',
      summarySheet: {}
    }
  }
}
</script>
