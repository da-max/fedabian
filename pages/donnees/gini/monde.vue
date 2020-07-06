<template>
  <section class="uk-article">
    <h2 class="uk-text-center  uk-article-title">
      L’indice de Gini dans le monde
    </h2>
    <hr />
    <ul uk-accordion="multiple: true">
      <li class="uk-open">
        <a class="uk-accordion-title">Carte du coefficient de Gini</a>
        <div class="uk-accordion-content">
          <gini-map></gini-map>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title">Le coefficient de Gini par pays</a>
        <div class="uk-accordion-content uk-overflow-auto">
          <gini-table></gini-table>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import GiniMap from '~/components/gini/Map'
import GiniTable from '~/components/gini/Table'

export default {
  name: 'GiniWorld',
  components: { GiniMap, GiniTable }
}
</script>
