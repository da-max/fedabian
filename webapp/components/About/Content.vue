<template>
  <section>
    <header class="skew">
      <div class="container">
        <p>
          Au départ simple autodidacte, je découvre et apprend la programmation
          par curiosité.
        </p>
        <p class="mt-8">
          C’est au cours de la découverte du web et du logiciel libre, que par
          ailleurs j’utilisais déjà beaucoup, que je commence à comprendre les
          dangers pour la liberté et la vie privée que peuvent représenter les
          entreprises qui proposent des services que j’utilisais au quotidien.
        </p>
        <p class="mt-8">
          <a class="btn btn-primary" target="_blank" :href="resumeLink" type="link">
            Voir mon CV
          </a>
        </p>
      </div>
    </header>
    <AboutTechnologies />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AboutContent extends Vue {
  name: string = 'Content'
  resumeLink: string = process.env.RESUME_LINK || '/resume'
}
</script>

<style scoped lang="scss">
h1 {
  @apply mb-10;
}

p {
  @apply text-xl text-center;
}

header {
  @apply mb-32;
}

a.btn {
  @apply px-10 text-base;
}
</style>
