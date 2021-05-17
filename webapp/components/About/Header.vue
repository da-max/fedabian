<template>
  <UtilsHeader>
    <template #title>
      À propos
    </template>
    <template #content>
      Développeur web et passionné d’informatique, j’ai pour principal
      objectif de rendre le web plus respectueux de l’utilisateur,
      plus ouvert et accessible au plus grand nombre.
    </template>
  </Utilsheader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AboutHeader extends Vue {
  name: string = 'Header.vue'
}
</script>

<style lang="scss" scoped>
p {
  @apply text-lg text-center mt-3
}
</style>
