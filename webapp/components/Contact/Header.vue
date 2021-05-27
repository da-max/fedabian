<template>
  <UtilsHeader>
    <template #title>
      Me contacter
    </template>
    <template #content>
      Vous pouvez me contacter directement via le formulaire ci-dessous,
      vous pouvez aussi m’envoyer un mail ou m’écrire sur mes réseaux sociaux.
    </template>
  </UtilsHeader>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactHeader extends Vue {
  name: string = 'Header.vue'
}
</script>
