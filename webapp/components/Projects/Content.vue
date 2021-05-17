<template>
  <section v-if="allProjects" class="container">
    <ProjectsProject v-for="project in allProjects.edges" :key="project.node.id" :project="project.node" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import allProjects from '~/apollo/queries/allProjects.gql'

@Component({
  apollo: {
    allProjects: {
      query: allProjects
    }
  }
})
export default class ProjectsContent extends Vue {
  name: string = 'Content.vue'
}
</script>

<style scoped>

</style>
