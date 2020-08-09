<template>
  <p v-if="$fetchState.pending">Chargement de la fiche ...</p>
  <p v-else-if="$fetchState.error">
    Erreur lors du chargement de la fiche :
    {{ $fetchState.error.message }}
  </p>
  <main
    v-else
    uk-scrollspy="taget: > article > *; cls: uk-animation-fade; delay: 500"
  >
    <!-- eslint-disable-next-line vue/no-v-html -->
    <article v-html="$md.render(content)"></article>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MathematicsSummarySheet',
  async fetch() {
    this.content = await this.$mathematicsApi.$get(
      `${encodeURIComponent(this.summarySheet.path)}/raw?ref=master`
    )
  },

  data() {
    return { content: '' }
  },

  computed: {
    ...mapGetters({ summarySheetBySlug: 'mathematics/summarySheetBySlug' }),
    summarySheet() {
      return this.summarySheetBySlug(this.$route.params.summarySheetSlug)
    }
  },
  watch: {
    '$route.params': '$fetch'
  }
}
</script>
