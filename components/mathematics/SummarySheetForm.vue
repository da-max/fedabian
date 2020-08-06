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
            <option value="-1" selected>Sélectionner le thème</option>
            <option v-for="t in themes" :key="t.id" :value="t.id"
              >{{ t.name }}
            </option>
          </select>
        </div>
        <div class="uk-flex uk-flex-around uk-margin-small-top">
          <button
            v-show="summarySheetThemeId >= 0"
            class="uk-icon-link"
            uk-icon="icon: pencil; ratio: 1.25"
            uk-toggle="target: #update-theme"
            type="button"
            title="Ajouter un thème."
          ></button>
          <button
            v-show="summarySheetThemeId >= 0"
            class="uk-icon-link"
            uk-toggle="target: #delete-theme"
            uk-icon="icon: trash; ratio: 1.25"
            type="button"
            title="Supprimer ce thème."
          ></button>
          <button
            class="uk-icon-link"
            uk-toggle="target: #add-theme"
            uk-icon="icon: plus; ratio: 1.25"
            type="button"
            title="Ajouter un thème."
          ></button>
        </div>
      </div>
    </div>
    <div class="uk-text-center">
      <input
        type="submit"
        value="Enregistrer la fiche"
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

    <modal
      v-show="summarySheetThemeId >= 0"
      id="update-theme"
      class="uk-light"
      :bg-close="false"
    >
      <template #header>
        <h3>Modifier le thème : {{ themeName }}</h3>
      </template>
      <template #body>
        <div>
          <input-form
            v-model="themeName"
            name="name"
            type="text"
            label="Nom du thème"
            class="uk-margin-medium-bottom"
          ></input-form>
        </div>
      </template>
      <template #footer>
        <button
          type="button"
          class="uk-button uk-button-primary uk-margin-medium-right"
          @click.prevent="saveTheme(true)"
        >
          Modifier ce thème
        </button>
        <button
          class="uk-button uk-button-default uk-modal-close"
          type="button"
        >
          Annuler
        </button>
      </template>
    </modal>
    <modal
      v-show="summarySheetThemeId >= 0"
      id="delete-theme"
      class="uk-light"
      :bg-close="false"
    >
      <template #header>
        <h3>Supprimer le thème : {{ themeName }}</h3>
      </template>
      <template #body>
        <div>
          <p>
            Vous êtes sur le point de supprimer un thème de mathématiques,
            <span class="uk-text-warning"
              >attention, cette action est irréversible, voulez-vous continuer
              ?</span
            >
          </p>
        </div>
      </template>
      <template #footer>
        <button
          type="button"
          class="uk-button uk-button-danger uk-margin-medium-right"
          @click.prevent="deleteCurrentTheme()"
        >
          Supprimer ce thème
        </button>
        <button
          class="uk-button uk-button-default uk-modal-close"
          type="button"
        >
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
      summarySheet: {
        slug: '',
        name: '',
        path: '',
        themeId: -1
      },
      theme: {
        name: '',
        slug: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      themes: 'mathematics/themes',
      summarySheetById: 'mathematics/summarySheetById',
      themeById: 'mathematics/themeById'
    }),
    summarySheetName: {
      get() {
        if (this.summarySheetId === null) {
          return this.summarySheet.name
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
        } else {
          this.summarySheet.name = newName
        }
      }
    },

    summarySheetSlug: {
      get() {
        if (this.summarySheetId === null) {
          return this.summarySheet.slug
        } else {
          return this.summarySheetById(this.summarySheetId).slug
        }
      },
      set(newSlug) {
        this.summarySheet.slug = newSlug
      }
    },

    summarySheetPath: {
      get() {
        if (this.summarySheetId === null) {
          return this.summarySheet.path
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
        } else {
          this.summarySheet.path = newPath
        }
      }
    },

    summarySheetThemeId: {
      get() {
        if (this.summarySheetId === null) {
          return this.summarySheet.themeId
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
        } else {
          this.summarySheet.themeId = newThemeId
        }
      }
    },

    themeName: {
      get() {
        if (this.summarySheetThemeId >= 0) {
          return this.themeById(this.summarySheetThemeId).name
        } else {
          return this.theme.name
        }
      },
      set(newName) {
        this.changeThemeElement({
          element: 'name',
          value: newName,
          id: this.summarySheetThemeId
        })
      }
    },
    themeSlug: {
      get() {
        if (this.summarySheetThemeId >= 0) {
          return this.themeById(this.summarySheetThemeId).slug
        } else {
          return this.theme.slug
        }
      }
    }
  },

  methods: {
    ...mapActions({
      addTheme: 'mathematics/addTheme',
      updateTheme: 'mathematics/updateTheme',
      deleteTheme: 'mathematics/deleteTheme',
      addSummarySheet: 'mathematics/addSummarySheet',
      updateSummarySheet: 'mathematics/updateSummarySheet'
    }),

    ...mapMutations({
      changeSummarySheetElement: 'mathematics/CHANGE_SUMMARY_SHEET_ELEMENT',
      changeThemeElement: 'mathematics/CHANGE_THEME_ELEMENT'
    }),

    async saveTheme(updated = false) {
      if (updated) {
        this.$uikit.modal('#update-theme').hide()
        await this.updateTheme({
          id: this.summarySheetThemeId,
          name: this.themeName,
          slug: this.themeSlug
        })
      } else {
        this.$uikit.modal('#add-theme').hide()
        await this.addTheme(this.theme)
      }
    },

    async saveSummarySheet() {
      const summarySheet = {
        name: this.summarySheetName,
        slug: this.summarySheetSlug,
        path: this.summarySheetPath,
        themeId: this.summarySheetThemeId
      }
      if (this.summarySheetId === null) {
        await this.addSummarySheet(summarySheet)
        this.summarySheetName = ''
        this.summarySheetSlug = ''
        this.summarySheetPath = ''
        this.summarySheetThemeId = -1
      } else {
        await this.updateSummarySheet(summarySheet)
      }
    },
    async deleteCurrentTheme() {
      await this.$uikit.modal('#delete-theme').hide()
      this.$router.push('/')

      this.deleteTheme(this.themeSlug)
    }
  }
}
</script>
