<template>
  <div>
    <header class="uk-margin-large-top uk-text-center">
      <h1 class="uk-text-bold">Modifier un projet</h1>
    </header>
    <section
      class="uk-margin-large-top uk-margin-large-bottom uk-tile uk-tile-default uk-width-2-3@l uk-width-4-5@m uk-width-5-6 uk-margin-auto uk-border-rounded"
    >
      <client-only>
        <change-project-form :project="project" />
      </client-only>
    </section>
  </div>
</template>

<script>
import ChangeProjectForm from '~/components/Portfolio/ChangeProjectForm'
export default {
  name: 'ChangeProject',
  middleware: ['auth'],
  components: { ChangeProjectForm },

  async asyncData({ $axios, params, error }) {
    try {
      const project = await $axios.$get(`projects/${params.id}`)
      return { project }
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.content
      })
    }
  },

  head() {
    return {
      title: 'Modifier un projet | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Modifier un projet'
        }
      ]
    }
  }
}
</script>
