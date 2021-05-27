<template>
  <section class="main-section">
    <ContactHeader class="main-section-header" />
    <ContactContent />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {
  name: string = 'Contact'

  head () {
    return {
      title: 'Me contacter | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Contacter Maxime `Da-max` Ben Hassen'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'maxime benhassen, maxime benhassen portfolio, maxime benhassen développeur web, maxime benhassen étudiant, maxime benhassen contact'
        }
      ]
    }
  }
}
</script>
