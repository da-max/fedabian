<template>
  <section>
    <mathematics-form-nav
      class="uk-margin-large-bottom"
      :show-metadata-form="showMetadataForm"
      @click="showMetadataForm = $event"
    ></mathematics-form-nav>
    <metadata-form
      v-if="showMetadataForm"
      :summary-sheet-id="summarySheetId"
    ></metadata-form>
    <summary-sheet-form
      v-else
      :summary-sheet-id="summarySheetId"
    ></summary-sheet-form>
  </section>
</template>

<script>
import MathematicsFormNav from './Nav'
import MetadataForm from './MetadataForm'
import SummarySheetForm from './SummarySheetForm'
export default {
  name: 'MathematicsForm',

  components: { MathematicsFormNav, MetadataForm, SummarySheetForm },

  props: {
    summarySheetId: {
      type: Number,
      required: false,
      default() {
        return null
      }
    }
  },

  data() {
    return {
      showMetadataForm: true
    }
  }
}
</script>
