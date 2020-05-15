<template>
  <section class="uk-margin-large-top uk-text-center">
    <alerts />
    <h1 class="uk-text-bold">Mes projets</h1>
    <p class="uk-text-large">
      Bien que mes projets ne soient pas très nombreux, j’essaye au maximum de
      continuer à développer et à améliorer ces projets.
    </p>
    <div class="uk-margin-xlarge-top uk-margin-xlarge-bottom uk-light">
      <client-only>
        <div
          v-for="project in projects"
          :key="project.id"
          class="skew-y-3 uk-tile uk-tile-default uk-margin-xlarge-bottom padding-xlarge-top padding-xlarge-bottom"
        >
          <project :project="project" />
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
import Project from '~/components/portfolio/Project'
import Alerts from '~/components/utility/Alerts'

export default {
  name: 'Projects',

  components: {
    Project,
    Alerts
  },

  async asyncData({ $axios, error }) {
    try {
      const projects = await $axios.$get('projects')
      return projects
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.content
      })
    }
  },

  methods: {
    deleteProject(projectId) {
      this.projects = this.projects.filter(
        (project) => project.id !== projectId
      )
    }
  },

  head() {
    return {
      title: 'Mes projets | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Les projects de Maxime `Da-max` Ben Hassen.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'maxime benhassen, maxime benhassen portfolio, maxime benhassen développeur web, maxime benhassen étudiant, maxime benhassen projets, da-max portfolio, da-max développeur, da-max, fedabian développeur, fedabian portfolio, fedabian projets'
        }
      ]
    }
  }
}
</script>
