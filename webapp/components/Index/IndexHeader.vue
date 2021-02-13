<template>
  <header>
    <div>
      <h1 class="pacifico">
        Maxime Ben Hassen
      </h1>
      <h2>Étudiant, passionné de logiciel libre, d’informatique et de mathématiques</h2>
      <nuxt-link to="/" class="btn btn-primary">
        Découvrir mes projets
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexHeader'
})

</script>

<style lang="scss" scoped>
header {
  @apply h-full text-center;
}

h1, h2 {
  @apply text-blue-800
}

h1 {
  @apply text-5xl font-medium
}

h2 {
  @apply text-4xl font-semibold mb-10
}

.btn {
  @apply mt-8;
}

div {
  @apply absolute transform -translate-x-1/2 -translate-y-1/2;
  top: 50%;
  left: 50%;
}
</style>
