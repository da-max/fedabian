<template>
  <section>
    <section class="skew">
      <ContactForm />
    </section>
    <ContactLinks />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactContent extends Vue {
  name: string = 'Content.vue'
}
</script>
