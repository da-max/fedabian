<template>
  <main @click="toggleDisplayNavbarOverlay">
    <PartialsNavbar :display-navbar-overlay="displayNavbarOverlay" />
    <Nuxt />
    <PartialsFooter />
    <UtilsAlerts />
  </main>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  name: string = 'DefaultLayout'

  displayNavbarOverlay: boolean = false

  toggleDisplayNavbarOverlay (event: Event): void {
    const overlayToggle: HTMLElement|null = document.querySelector('#overlay-toggle')
    if (event.target) {
      overlayToggle && !overlayToggle.contains(<HTMLInputElement>event.target)
        ? this.displayNavbarOverlay = false
        : this.displayNavbarOverlay = !this.displayNavbarOverlay
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  @apply flex flex-col;
}
</style>
