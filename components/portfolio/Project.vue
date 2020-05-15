<template>
  <article>
    <img
      width="900"
      height="600"
      :src="project.imageLink"
      :alt="project.title"
    />
    <div>
      <p
        class="uk-width-1-3@l uk-width-2-3@m uk-margin-auto uk-margin-medium-top"
        v-html="project.description"
      ></p>
      <a :href="project.demo" class="uk-button uk-button-primary">
        <span class="uk-margin-right"
          ><font-awesome-icon :icon="['fas', 'eye']"/></span
        >Voir le projet</a
      >
      <a
        :href="project.repository"
        class="uk-margin-left uk-button uk-button-primary"
        ><span class="uk-margin-right">
          <font-awesome-icon :icon="['fas', 'code']"/></span
        >Gitlab</a
      >
      <div v-show="$store.state.auth.loggedIn" class="uk-margin-medium-top">
        <button
          class="uk-button uk-button-danger"
          @click.prevent="deleteProject(project.id)"
        >
          Supprimer ce projet
        </button>
        <button class="uk-button uk-button-primary">
          Modifier ce projet
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      default() {
        return {}
      },
      type: Object
    }
  },

  methods: {
    async deleteProject(projectId) {
      try {
        await this.$axios.$delete('/project/' + projectId)
        this.$parent.deleteProject(projectId)
        this.$uikit.notification('Projet supprimé', { status: 'success' })
      } catch (err) {
        if (err.response.statusCode === 400) {
          this.$store.commit('alerts/ADD_400')
        } else if (err.response.statusCode === 500) {
          this.$store.commit('alerts/ADD_500')
        }
      }
    }
  }
}
</script>
