<template>
  <section class="contact-links-container">
    <ContactLink
      v-for="link in contactLinks"
      :key="link.title"
      :contact-link="link"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IContactLink } from '~/types/portfolio.model'

@Component
export default class ContactLinks extends Vue {
  name: string = 'Links.vue'
  contactLinks: IContactLink[] = [
    {
      title: 'Email',
      content: 'contact@fedabian.fr',
      icon: ['fas', 'envelope']
    },
    {
      title: 'Twitter',
      content: '@Damaaax',
      icon: ['fab', 'twitter']
    },
    {
      title: 'Mastodon',
      content: '@Damax@framapiaf.org',
      icon: ['fab', 'mastodon']
    },
    {
      title: 'Gitlab',
      content: '@Damax',
      icon: ['fab', 'gitlab']
    }
  ]
}
</script>

<style lang="scss">
.contact-links-container {
  @apply text-center grid grid-cols-4 gap-2;
    > * {
    @apply col-span-full mb-4;
  }
}

@screen md {
  .contact-links-container > * {
    @apply  col-span-2;
  }
}

@screen xl {
  .contact-links-container > *{
    @apply col-span-1;
  }
}
</style>
