<template>
  <header>
    <div>
      <h1 class="pacifico">
        Maxime `Da-max` Ben Hassen
      </h1>
      <h2>Étudiant, passionné de logiciel libre, d’informatique et de mathématiques</h2>
      <nuxt-link to="/projects" class="btn btn-primary">
        Découvrir mes projets
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IndexHeader extends Vue {
  name: string = 'Header'
}

</script>

<style lang="scss" scoped>
.dark-mode {
  h1, h2 {
    @apply text-inverse-primary;
  }
}

header {
  @apply text-center;
  height: 100vh;

  div {
    @apply absolute transform -translate-x-1/2 -translate-y-1/2;
    top: 50%;
    left: 50%;
  }
}

h1, h2 {
  @apply text-primary;
}

h1 {
  @apply text-xl font-medium
}

h2 {
  @apply text-lg font-semibold mb-10
}

.btn {
  @apply mt-8;
}

@screen md {
  h1 {
    @apply text-5xl
  }

  h2 {
    @apply text-3xl
  }

}
</style>
