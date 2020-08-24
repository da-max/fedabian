<template>
  <p v-if="$fetchState.pending">Récupération de la fiche ...</p>
  <p v-else-if="$fetchState.error">
    Erreur lors du chargement de la fiche :
    {{ $fetchState.error.message }}
  </p>
  <form v-else action="#" @submit.prevent="saveSummarySheet()">
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
    <div class="uk-text-center uk-margin-medium-top">
      <button
        type="button"
        class="uk-button uk-button-default uk-margin-medium-right"
        uk-toggle="target: #markdown-editor"
      >
        Afficher l’éditeur markdown
      </button>
      <input
        type="submit"
        value="Enregistrer"
        class="uk-button uk-button-primary"
      />
    </div>
    <modal id="markdown-editor" class="uk-light" :full="true">
      <template #header><h3>Éditeur markdown</h3></template>
      <template #body>
        <div uk-grid class="uk-child-width-1-2">
          <div>
            <textarea
              id="textarea-content"
              v-model="textareaContent"
              name="content"
              class="uk-textarea"
              @focus="textareaAutoGrow()"
            ></textarea>
          </div>
          <div v-html="$md.render(content)"></div>
        </div>
      </template>
    </modal>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
import InputForm from '~/components/Utils/Form/Input'
import Modal from '~/components/Utils/Modal'

export default {
  name: 'SummarySheetForm',

  components: { InputForm, Modal },

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
    },

    textareaContent: {
      get() {
        return this.content
      },

      set(newContent) {
        this.textareaAutoGrow()
        this.content = newContent
      }
    }
  },

  methods: {
    async saveSummarySheet() {
      const response = await this.$mathematicsApi.$put(
        `${encodeURIComponent(this.summarySheet.path)}`,
        {
          branch: 'master',
          author_email: this.user.email,
          author_name: this.user.name,
          content: this.content,
          commit_message: this.commit
        }
      )
      console.log(response)
    },

    textareaAutoGrow() {
      const textareaContent = document.getElementById('textarea-content')
      textareaContent.style.height = 'auto'
      textareaContent.style.overflow = 'hidden'
      textareaContent.style.height = textareaContent.scrollHeight + 'px'
    }
  }
}
</script>
