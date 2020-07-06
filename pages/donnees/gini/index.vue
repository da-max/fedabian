<template>
  <main class="uk-margin-large-top">
    <h1 class="uk-text-center uk-text-bold uk-margin-large-bottom">
      Coefficient de Gini
    </h1>

    <section
      class="uk-container uk-background-default uk-padding uk-margin-large-bottom uk-light"
    >
      <gini-nav></gini-nav>
    </section>
  </main>
</template>

<script>
import GiniNav from '~/components/gini/Nav'
export default {
  components: {
    GiniNav
  }
}
</script>
