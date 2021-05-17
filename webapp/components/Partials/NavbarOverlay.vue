<template>
  <div :class="['overlay-nav', {'overlay-show': display}]">
    <div>
      <nuxt-link to="/about">
        Présentation
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/projects">
        Mes projets
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/contact">
        Me contacter
      </nuxt-link>
    </div>
    <UtilsThemeSwitcher />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NavbarOverlay extends Vue {
  name: string = 'NavbarOverlay'
  @Prop({ required: false }) readonly display: boolean
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .overlay-nav {
    @apply bg-default;
  }
}

.overlay-nav {
  @apply fixed h-full top-0 bg-inverse-default p-20
  z-10 flex flex-col items-center justify-center transition-all duration-300;

  left: -100%;

  > div {
    @apply my-3;
  }

  &.overlay-show {
    @apply left-0;
  }
}

</style>
