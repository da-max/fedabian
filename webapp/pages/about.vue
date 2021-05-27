<template>
  <section class="main-section">
    <AboutHeader class="main-section-header" />
    <AboutContent />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {
  readonly name: string = 'About'

  head () {
    return {
      title: 'A propos | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Biographie de Maxime `Da-max` Ben Hassen'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'maxime benhassen, maxime benhassen portfolio, maxime benhassen développeur web, maxime benhassen étudiant, maxime benhassen biographie, da-max portfolio, da-max développeur, da-max, fedabian développeur, fedabian portfolio, fedabian biographie'
        }
      ]
    }
  }
}
</script>
