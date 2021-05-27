<template>
  <div class="navbar-container">
    <nav class="navbar-nav space-x-4">
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
        <nuxt-link class="pacifico text-2xl" to="/">
          Fedabian
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/contact">
          Me contacter
        </nuxt-link>
      </div>
      <UtilsThemeSwitcher />
    </nav>

    <nav class="navbar-mobile">
      <div>
        <nuxt-link class="pacifico text-2xl" to="/">
          Fedabian
        </nuxt-link>
      </div>
      <div>
        <FontAwesomeIcon id="overlay-toggle" :icon="['fas', 'bars']" />
      </div>
    </nav>
    <PartialsNavbarOverlay :display="displayNavbarOverlay" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  name: string = 'Navbar'
  @Prop({ required: false, default: false }) readonly displayNavbarOverlay: boolean|undefined
}

</script>

<style lang="scss" scoped>
.dark-mode {
  .navbar-container {
    @apply bg-default text-inverse-default;
  }

  .navbar-mobile {
    @apply text-inverse-secondary;
    > div > svg {
      @apply text-inverse-default;
    }

    :hover {
      @apply text-inverse-primary;
    }
  }
}

.navbar-container {
  @apply bg-inverse-default p-4 text-lg text-default shadow-2xl;
}

.navbar-nav {

  @apply flex justify-center items-center hidden;

  .theme-switcher {
    @apply relative;
    right: 0;
    left: 10%;
  }

  > div {
    @apply mx-4;
  }
}

.navbar-mobile {
  @apply flex justify-between mx-4 text-secondary cursor-pointer;
  > div > svg {
    @apply align-middle text-2xl mt-1;
  }

  :hover {
    @apply text-primary;
  }
}

@screen md {
  .navbar-nav {
    @apply flex;
  }

  .navbar-mobile {
    @apply hidden;
  }
}

</style>
