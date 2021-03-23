<template>
  <header class="container">
    <h1>
      À propos
    </h1>
    <p>
      Développeur web et passionné d’informatique, j’ai pour principal
      objectif de rendre le web plus respectueux de l’utilisateur,
      plus ouvert et accessible au plus grand nombre.
    </p>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default class AboutHeader extends Vue {
  name: string = 'AboutHeader'
}
</script>

<style lang="scss" scoped>
p {
  @apply text-lg text-center mt-3
}
</style>
