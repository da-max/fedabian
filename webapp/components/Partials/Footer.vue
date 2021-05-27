<template>
  <footer>
    <p>
      Maxime Ben Hassen - Textes libres sauf mention(s) contraire(s). Email :
      <a href="mailto: maxime.benhassen [at] fedabian.fr">maxime.benhassen [at] fedabian.fr</a>
    </p>
    <p>
      Version : {{ version }}
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { version } from '@/package.json'

@Component
export default class Footer extends Vue {
  name: string = 'Footer'
  version: string = version
}

</script>

<style scoped lang="scss">
.dark-mode {
  footer {
    @apply bg-primary;
  }
}

footer {
  @apply py-16 bg-inverse-primary mt-20;

  p {
    @apply mt-8 text-xl text-center;
  }
}
</style>
