<template>
  <form method="post" class="uk-form-inline" @submit.prevent="saveSummarySheet">
    <div
      uk-grid
      class="uk-child-width-1-2@m uk-flex uk-flex-center uk-grid-large uk-light uk-margin-large-bottom"
    >
      <input-form
        v-model="summarySheet.name"
        :value="summarySheet.name"
        name="name"
        type="text"
        label="Nom de la fiche"
      ></input-form>
      <input-form
        v-model="summarySheet.slug"
        :value="summarySheet.slug"
        name="slug"
        type="text"
        label="Slug de la fiche"
      ></input-form>
      <input-form
        v-model="summarySheet.path"
        :value="summarySheet.path"
        name="path"
        type="text"
        label="Chemin de la fiche"
      ></input-form>
      <div>
        <label for="theme" class="uk-form-label">Thème de la fiche</label>
        <div class="uk-form-controls">
          <select v-model="summarySheet.themeId" name="theme" class="uk-select">
            <option selected>Sélectionner le thème</option>
            <option v-for="t in themes" :key="t.id" :value="t.id"
              >{{ t.name }}
            </option>
          </select>
        </div>
        <div class="uk-margin-medium-top">
          <button
            class="uk-button uk-button-text"
            uk-toggle="target: #add-theme"
            type="button"
          >
            Ajouter un thème
          </button>
        </div>
      </div>
    </div>
    <div class="uk-text-center">
      <input
        type="submit"
        value="Ajouter la fiche"
        class="uk-button uk-button-primary"
      />
    </div>
    <modal id="add-theme" :bg-close="false">
      <template #header>
        <h3>
          Ajouter un thème
        </h3>
      </template>
      <template #body>
        <div>
          <input-form
            v-model="theme.name"
            name="name"
            type="text"
            label="Nom du thème"
            class="uk-margin-medium-bottom"
          ></input-form>
          <input-form
            v-model="theme.slug"
            name="slug"
            type="text"
            label="Slug du thème"
          ></input-form>
        </div>
      </template>
      <template #footer>
        <button
          type="button"
          class="uk-button uk-button-primary uk-margin-medium-right"
          @click.prevent="saveTheme()"
        >
          Ajouter un thème
        </button>
        <butotn class="uk-button uk-button-danger uk-modal-close" type="button"
          >Annuler</butotn
        >
      </template>
    </modal>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import InputForm from '~/components/utility/form/Input'
import Modal from '~/components/utility/Modal'

export default {
  name: 'AddSummarySheetForm',
  components: {
    InputForm,
    Modal
  },

  async fetch() {
    await this.getAllThemes()
  },

  middleware: ['auth'],

  data() {
    return {
      summarySheet: {
        path: '',
        name: '',
        slug: '',
        themeId: ''
      },
      theme: {
        name: '',
        slug: ''
      }
    }
  },

  computed: {
    ...mapGetters({ themes: 'mathematics/themes' })
  },

  methods: {
    ...mapActions({
      getAllThemes: 'mathematics/getAllThemes',
      addTheme: 'mathematics/addTheme',
      addSummarySheet: 'mathematics/addSummarySheet'
    }),

    async saveTheme() {
      await this.addTheme(this.theme)
    },

    async saveSummarySheet() {
      await this.addSummarySheet(this.summarySheet)
    }
  }
}
</script>
