<template>
  <section class="skew">
    <article class="md:w-2/3 m-auto">
      <header>
        <h2 class="text-3xl">
          Créer des sites web afin de mettre en avant des projets éthiques et solidaires.
        </h2>
        <p>
          Animé par des valeurs, les sites que je crée respecteront la vie privée de l’utilisateur.
        </p>
      </header>
      <section>
        <p class="mt-24 mb-12">
          Je trouve que le numérique est le lieu de nombreuses dérives, je préfère donc limiter
          les projets dans lesquels je m’engage afin qu’ils correspondent aux valeurs que j’essaie de porter.
        </p>
        <h2 class="my-5">
          Liste (non exhaustive) des thèmes qui m’intéressent
        </h2>
        <ul class="list-disc">
          <li v-for="passion in passions" :key="passion">
            {{ passion }}
          </li>
        </ul>
      </section>
      <footer class="mt-24 text-center">
        <nuxt-link to="/contact" class="btn btn-primary">
          Me contacter
        </nuxt-link>
      </footer>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class IndexContent extends Vue {
  name: string = 'DefaultNavbar'
  passions: string[] = [
    'Open source, logiciel libre et décentralisation',
    'Engagement politique et solidaire',
    'Écologie',
    'Circuit court et consommation éthique'
  ]
}

</script>

<style lang="scss" scoped>
ul > * {
  @apply mt-2;
}
</style>
