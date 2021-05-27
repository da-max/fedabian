<template>
  <UtilsHeader>
    <template #title>
      Mes projets
    </template>
    <template #content>
      Voici les projets sur lesquels je travaille ou j’ai travaillé. La plupart étant des projets libres, il est
      possible de retrouver le code source sur des forges logiciels.
    </template>
  </UtilsHeader>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ProjectsHeader extends Vue {
  name: string = 'Header.vue'
}
</script>
