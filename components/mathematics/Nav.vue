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
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MathmeticsNav',

  computed: {
    ...mapGetters({
      themes: 'mathematics/themes',
      summarySheets: 'mathematics/summarySheets'
    })
  },
  methods: {
    filterSummarySheets(themeId) {
      return this.summarySheets.filter(
        (summarySheet) => summarySheet.themeId === themeId
      )
    }
  }
}
</script>
