<template>
  <section>
    <IndexHeader />
    <IndexContent />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  name: string = 'Index'

  head () {
    return {
      title: 'Accueil | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Portfolio de Maxime `Da-max` Ben Hassen, développeur web.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
              'Maxime `Da-max` Ben Hassen, développeur web, maxime benhassen, portfolio da-max, Maxime Ben Hassen portfolio'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  @apply flex-1
}
</style>
