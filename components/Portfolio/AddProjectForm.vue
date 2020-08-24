<template>
  <form method="post" class="uk-form-inline" @submit.prevent="saveProject">
    <div
      uk-grid
      class="uk-child-width-1-2@m uk-grid-large uk-light uk-margin-large-bottom"
    >
      <div>
        <input-form
          v-model="project.title"
          label="Titre du projet"
          type="text"
          name="title"
          :value="project.title"
        ></input-form>
      </div>
      <div>
        <input-form
          v-model="project.repository"
          label="Dépôt du projet"
          type="url"
          :required="false"
          name="repository"
          :value="project.repository"
        ></input-form>
      </div>
      <div>
        <input-form
          v-model="project.demo"
          label="Démo du projet"
          type="url"
          :required="false"
          name="demo"
          :value="project.demo"
        ></input-form>
      </div>
      <div>
        <input-form
          v-model="project.imageLink"
          label="Lien vers l’image du projet"
          type="url"
          name="imageLink"
          :value="project.imageLink"
        ></input-form>
      </div>
    </div>
    <label class="uk-form-label">Description du projet</label>
    <rich-editor v-model="project.description" />

    <div class="uk-margin-medium-top uk-text-center">
      <input
        type="submit"
        value="Ajouter le projet"
        class="uk-button uk-button-primary"
      />
    </div>
  </form>
</template>
<script>
import InputForm from '~/components/Utils/Form/Input'

export default {
  name: 'AddProjectForm',

  components: { InputForm },

  data() {
    return {
      project: {
        title: '',
        repository: '',
        demo: '',
        imageLink: '',
        description: ''
      }
    }
  },

  methods: {
    async saveProject() {
      try {
        await this.$axios.$post('/projects', this.project)
        this.project = {
          title: '',
          repository: '',
          demo: '',
          imageLink: '',
          description: ''
        }
        this.$uikit.notification('Projet ajouté', { status: 'success' })
      } catch (err) {
        if (err.response.statusCode === 404) {
          this.$uikit.notification('Erreur, ressource non trouvé', {
            status: 'danger'
          })
        } else if (err.response.statusCode === 500) {
          this.$uikit.notification('Erreur interne', { status: 'danger' })
        } else {
          this.$uikit.notification('Erreur inconnue.', { status: 'danger' })
        }
      }
    }
  }
}
</script>
