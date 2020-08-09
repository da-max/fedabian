<template>
  <nav>
    <ul
      v-if="summarySheet && summarySheet.path !== undefined"
      class="uk-child-width-expand uk-text-center"
      uk-tab
    >
      <li>
        <a type="button" href="#" @click="switchShowMetadataForm(true)"
          >Modifier les métadonnées</a
        >
      </li>
      <li
        :class="{
          'uk-disabled': !summarySheet.path
        }"
      >
        <a type="button" href="#" @click="switchShowMetadataForm(false)"
          >Modifier la fiche</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MathematicsFormNav',
  props: {
    showMetadataForm: {
      default: true,
      type: Boolean,
      required: false
    }
  },
  computed: {
    ...mapGetters({ summarySheetBySlug: 'mathematics/summarySheetBySlug' }),
    summarySheet() {
      return this.summarySheetBySlug(this.$route.params.summarySheetSlug)
    }
  },

  methods: {
    switchShowMetadataForm(value) {
      this.$emit('click', value)
    }
  }
}
</script>
