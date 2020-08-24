<template>
  <table
    id="gini-table"
    class="uk-table uk-table-divider uk-table-striped uk-table-hover"
  >
    <thead>
      <tr>
        <th>Nom du pays</th>
        <th>Nombre d’habitant</th>
        <th>Superficie du pays</th>
        <th>Coefficient de Gini</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="country in countries" :key="country.name">
        <td>
          {{ country.translations.fr }}
        </td>
        <td>{{ country.population }}</td>
        <td v-if="country.area !== null">{{ country.area }} km²</td>
        <td v-else>Inconnu</td>
        <td v-if="country.gini !== null">
          {{ Math.round(country.gini * 100) / 10000 }}
        </td>
        <td v-else>Inconnu</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GiniTable',
  computed: {
    ...mapGetters({ countries: 'gini/countries' })
  }
}
</script>

<style lang="scss" scoped>
$table-striped-row-background: #dd6b20;
#gini-table {
  tbody {
    tr:nth-child(odd) {
      background-color: $table-striped-row-background;
    }
    tr:hover {
      background-color: lighten(
        $color: $table-striped-row-background,
        $amount: 10
      );
    }
  }
}
</style>
