<template>
  <p v-if="$fetchState.pending">Récupération de la fiche ...</p>
  <p v-else-if="$fetchState.error">
    Erreur lors du chargement de la fiche :
    {{ $fetchState.error.message }}
  </p>
  <form v-else action="#" @submit.prevent="">
    <fieldset
      class="uk-fieldset uk-grid-medium uk-flex-center uk-child-width-1-2@m uk-margin-large-bottom"
      uk-grid
    >
      <legend class="uk-legend">Informations sur la mise à jour</legend>
      <div>
        <input-form
          v-model="emailUser"
          type="email"
          name="author-email"
          label="Email de l’auteur"
          :value="emailUser"
        ></input-form>
      </div>
      <div>
        <input-form
          v-model="nameUser"
          type="text"
          name="author-name"
          label="Nom de l’auteur"
          :value="nameUser"
        ></input-form>
      </div>
      <div class="uk-margin-medium-top">
        <input-form
          v-model="commit"
          type="text"
          name="commit-message"
          label="Descriptif des changements"
          :value="commit"
        ></input-form>
      </div>
    </fieldset>
    <ul class="uk-child-width-expand uk-text-center" uk-tab>
      <li>
        <a href="#" type="button">Éditeur markdown</a>
      </li>
      <li>
        <a href="#" type="button">Rendu</a>
      </li>
    </ul>
    <ul class="uk-switcher">
      <li>
        <textarea
          v-model="content"
          name="content"
          class="uk-textarea uk-width-1-1"
          rows="40"
        ></textarea>
      </li>
      <li>
        <p class="uk-text-warning">
          Attention, ceci n’est qu’un aperçu vos changements seront perdus si
          vous ne cliquez pas sur le bouton enregistrer.
        </p>
        <div v-html="$md.render(content)"></div>
      </li>
    </ul>
    <div class="uk-text-center uk-margin-medium-top">
      <input
        type="submit"
        value="Enregistrer"
        class="uk-button uk-button-primary"
      />
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import InputForm from '~/components/utility/form/Input'

export default {
  name: 'SummarySheetForm',

  components: { InputForm },

  props: {
    summarySheetId: {
      type: Number,
      required: true
    }
  },

  async fetch() {
    this.content = await this.$mathematicsApi.$get(
      `${encodeURIComponent(this.summarySheet.path)}/raw`,
      {
        params: { ref: 'master' }
      }
    )
  },

  data() {
    return {
      content: '',
      commit: '',
      user: {
        email: '',
        name: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      summarySheetById: 'mathematics/summarySheetById'
    }),
    summarySheet() {
      return this.summarySheetById(this.summarySheetId)
    },

    emailUser: {
      get() {
        return this.$store.state.auth.user.email
      },
      set(newEmail) {
        this.user.email = newEmail
      }
    },

    nameUser: {
      get() {
        return this.$store.state.auth.user.username
      },
      set(newName) {
        this.user.name = newName
      }
    }
  }
}
</script>
