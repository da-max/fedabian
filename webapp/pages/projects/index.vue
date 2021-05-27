<template>
  <section class="main-section">
    <ProjectsHeader class="main-section-header" />
    <ProjectsContent />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Projects extends Vue {
  name: string = 'Projects'

  head () {
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

<style lang="scss" scoped>
.main-section {
  @apply flex flex-col items-center;
}
</style>
