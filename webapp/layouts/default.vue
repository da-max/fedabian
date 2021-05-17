<template>
  <main @click="toggleDisplayNavbarOverlay">
    <PartialsNavbar :display-navbar-overlay="displayNavbarOverlay" />
    <Nuxt />
    <PartialsFooter />
  </main>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  name: string = 'DefaultLayout'

  displayNavbarOverlay: boolean = false

  toggleDisplayNavbarOverlay (event: Event) {
    !document.querySelector('#overlay-toggle').contains(event.target)
      ? this.displayNavbarOverlay = false
      : this.displayNavbarOverlay = !this.displayNavbarOverlay
  }
}
</script>

<style lang="scss" scoped>
main {
  @apply flex flex-col;
}
</style>
