<template>
  <UtilsCard :transparent="true" :small="true" class="contact-link">
    <template #header>
      <FontAwesomeIcon :icon="contactLink.icon" />
      <h2>{{ contactLink.title }}</h2>
    </template>
    <template #content>
      <p>{{ contactLink.content }}</p>
    </template>
  </UtilsCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IContactLink } from '~/types/portfolio.model'

@Component
export default class ContactLink extends Vue {
  name: string = 'Link.vue'
  @Prop({ required: true }) readonly contactLink: IContactLink|undefined
}
</script>

<style lang="scss">
.contact-link {
  > header {
    @apply text-3xl mb-2;
  }
  > section {
    @apply text-xl;
  }
}
</style>
