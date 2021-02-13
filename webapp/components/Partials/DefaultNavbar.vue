<template>
  <div class="navbar-container">
    <nav class="navbar-nav space-x-4">
      <div>
        <nuxt-link to="/">
          Présentation
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">
          Mes projets
        </nuxt-link>
      </div>
      <div>
        <nuxt-link class="pacifico text-2xl" to="/">
          Fedabian
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">
          Coefficient de Gini
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/">
          Mathématiques
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultNavbar'
})

</script>

<style lang="postcss" scoped>
.navbar-container {
  @apply bg-blue-100 p-4 text-lg text-blue-900;
}

.navbar-nav {
  @apply flex items-center justify-center;
}

</style>
