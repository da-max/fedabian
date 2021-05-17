<template>
  <UtilsCard class="project" :hover="true">
    <template #header>
      <h2>{{ project.title }}</h2>
    </template>
    <template #content>
      <img v-if="project.image" :src="project.image" :alt="project.title">
      <p>{{ project.description }}</p>
      <div class="links">
        <a v-show="project.demo" :href="project.demo" target="_blank" class="btn btn-primary">Voir le projet</a>
        <a v-show="project.repo" :href="project.repo" target="_blank" class="ml-4 btn btn-primary">Voir le code source</a>
      </div>
    </template>
  </UtilsCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IProject } from '~/types/project.model'

@Component
export default class Project extends Vue {
  name: string = 'Project'
  @Prop({ required: true }) readonly project!: IProject
}
</script>

<style scoped lang="scss">
.project {
  @apply my-10;
  h2 {
    @apply my-4;
  }
  .links {
    @apply text-center py-10;
  }
}
</style>
