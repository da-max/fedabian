<template>
  <section v-if="allProjects" class="container">
    <ProjectsProject v-for="project in allProjects.edges" :key="project.node.id" :project="project.node" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import ALL_PROJECTS from '~/apollo/queries/allProjects.gql'

@Component({
  apollo: {
    allProjects: {
      query: ALL_PROJECTS
    }
  }
})
export default class ProjectsContent extends Vue {
  name: string = 'Content'
}
</script>

<style scoped>

</style>
