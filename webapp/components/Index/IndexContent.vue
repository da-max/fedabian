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
          <li>Open source, logiciel libre et décentralisation</li>
          <li>Engagement politique et solidaire</li>
          <li>Écologie</li>
          <li>Circuit court et consommation éthique</li>
          <li>Finance décentralisée</li>
        </ul>
      </section>
      <footer class="mt-24 text-left">
        <p>Ça vous intéresse ?</p>
        <div class="text-center">
          <nuxt-link to="/" class="btn btn-primary">
            Me contacter
          </nuxt-link>
        </div>
      </footer>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultNavbar'
})

</script>

<style lang="scss" scoped>
.skew {
  @apply bg-blue-100 transform skew-y-3 p-20 my-20 text-center text-xl;
  > * {
    @apply transform -skew-y-3;
  }
}

ul > * {
  @apply mt-2;
}
</style>
