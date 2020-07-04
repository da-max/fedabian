<template>
  <main class="uk-margin-large-top uk-light">
    <h1 class="uk-text-center uk-text-bold uk-margin-large-bottom">
      Coefficient de Gini
    </h1>
    <section
      class="uk-container uk-background-default uk-padding uk-margin-large-bottom"
    >
      <div uk-grid>
        <div class="uk-width-1-4@m">
          <gini-nav></gini-nav>
        </div>
        <div class="uk-width-expand">
          <h2 class="uk-text-center">L’indice de Gini dans le monde</h2>
          <gini-map></gini-map>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GiniNav from '~/components/gini/Nav'
import GiniMap from '~/components/gini/Map'

export default {
  name: 'GiniWorld',
  components: { GiniNav, GiniMap }
}
</script>
