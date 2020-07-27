<template>
  <form method="post" class="uk-form-inline" @submit.prevent="saveSummarySheet">
    <div
      uk-grid
      class="uk-child-width-1-2@m uk-flex uk-flex-center uk-grid-large uk-light uk-margin-large-bottom"
    >
      <input-form
        v-model="summarySheetName"
        :value="summarySheetName"
        name="name"
        type="text"
        label="Nom de la fiche"
      ></input-form>
      <input-form
        v-show="summarySheetId === null"
        v-model="summarySheetSlug"
        :value="summarySheetSlug"
        name="slug"
        type="text"
        label="Slug de la fiche"
      ></input-form>
      <input-form
        v-model="summarySheetPath"
        :value="summarySheetPath"
        name="path"
        type="text"
        label="Chemin de la fiche"
      ></input-form>
      <div>
        <label for="theme" class="uk-form-label">Thème de la fiche</label>
        <div class="uk-form-controls">
          <select v-model="summarySheetThemeId" name="theme" class="uk-select">
            <option value="null" selected>Sélectionner le thème</option>
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
    <modal id="add-theme" class="uk-light" :bg-close="false">
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
        <button class="uk-button uk-button-danger uk-modal-close" type="button">
          Annuler
        </button>
      </template>
    </modal>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import InputForm from '~/components/utility/form/Input'
import Modal from '~/components/utility/Modal'

export default {
  name: 'SummarySheetForm',
  components: {
    InputForm,
    Modal
  },

  middleware: ['auth'],

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
      slug: '',
      theme: {
        name: '',
        slug: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      themes: 'mathematics/themes',
      summarySheetById: 'mathematics/summarySheetById'
    }),
    summarySheetName: {
      get() {
        if (this.summarySheetId === null) {
          return ''
        } else {
          return this.summarySheetById(this.summarySheetId).name
        }
      },
      set(newName) {
        if (this.summarySheetId !== null) {
          this.changeSummarySheetElement({
            element: 'name',
            value: newName,
            id: this.summarySheetId
          })
        }
      }
    },

    summarySheetSlug: {
      get() {
        if (this.summarySheetId === null) {
          return this.slug
        } else {
          return this.summarySheetById(this.summarySheetId).slug
        }
      },
      set(newSlug) {
        this.slug = newSlug
      }
    },

    summarySheetPath: {
      get() {
        if (this.summarySheetId === null) {
          return ''
        } else {
          return this.summarySheetById(this.summarySheetId).path
        }
      },
      set(newPath) {
        if (this.summarySheetId !== null) {
          this.changeSummarySheetElement({
            element: 'path',
            value: newPath,
            id: this.summarySheetId
          })
        }
      }
    },

    summarySheetThemeId: {
      get() {
        if (this.summarySheetId === null) {
          return ''
        } else {
          return this.summarySheetById(this.summarySheetId).themeId
        }
      },
      set(newThemeId) {
        if (this.summarySheetId !== null) {
          this.changeSummarySheetElement({
            element: 'themeId',
            value: newThemeId,
            id: this.summarySheetId
          })
        }
      }
    }
  },

  methods: {
    ...mapActions({
      addTheme: 'mathematics/addTheme',
      addSummarySheet: 'mathematics/addSummarySheet',
      updateSummarySheet: 'mathematics/updateSummarySheet'
    }),

    ...mapMutations({
      changeSummarySheetElement: 'mathematics/CHANGE_SUMMARY_SHEET_ELEMENT'
    }),

    async saveTheme() {
      await this.addTheme(this.theme)
    },

    async saveSummarySheet() {
      if (this.summarySheetId === null) {
        await this.addSummarySheet({
          name: this.summarySheetName,
          slug: this.summarySheetSlug,
          path: this.summarySheetPath,
          themeId: this.summarySheetThemeId
        })
      } else {
        await this.updateSummarySheet({
          id: this.summarySheetId,
          name: this.summarySheetName,
          slug: this.summarySheetSlug,
          path: this.summarySheetPath,
          themeId: this.summarySheetThemeId
        })
      }
    }
  }
}
</script>
