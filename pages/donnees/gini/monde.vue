<template>
  <article class="uk-article">
    <h1 class="uk-text-center uk-article-title">
      L’indice de Gini dans le monde
    </h1>
    <hr />
    <ul uk-accordion="multiple: true">
      <li>
        <a class="uk-accordion-title">Le coefficient de Gini par pays</a>
        <div class="uk-accordion-content uk-overflow-auto">
          <gini-table></gini-table>
        </div>
      </li>
      <li class="uk-open">
        <a class="uk-accordion-title">Carte du coefficient de Gini</a>
        <div class="uk-accordion-content">
          <gini-map></gini-map>
        </div>
      </li>
    </ul>
  </article>
</template>

<script>
import GiniMap from '~/components/Gini/Map'
import GiniTable from '~/components/Gini/Table'

export default {
  name: 'GiniWorld',
  components: { GiniMap, GiniTable },
  head() {
    return {
      title: 'Le coefficient de Gini dans le monde | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Le coefficient de Gini dans le monde'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Nuxtjs coefficient de Gini, coefficient de Gini dans le monde, restcountries coefficient de Gini, coefficient de Gini, monde gini'
        }
      ]
    }
  }
}
</script>
