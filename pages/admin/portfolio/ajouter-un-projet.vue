<template>
  <div>
    <header class="uk-margin-large-top uk-text-center">
      <h1 class="uk-text-bold">Ajouter un projet</h1>
    </header>
    <section
      class="uk-margin-large-top uk-margin-large-bottom uk-tile uk-tile-default uk-width-2-3@l uk-width-4-5@m uk-width-5-6 uk-margin-auto uk-border-rounded"
    >
      <client-only>
        <add-project-form />
      </client-only>
    </section>
  </div>
</template>
<script>
import AddProjectForm from '~/components/portfolio/AddProjetForm'
export default {
  name: 'AddProject',
  middleware: ['auth'],
  components: {
    AddProjectForm
  }
}
</script>
