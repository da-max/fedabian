<template>
  <nuxt-child></nuxt-child>
</template>

<script>
export default {
  name: 'Gini',
  async fetch() {
    const { data } = await this.$axios.get(
      'https://restcountries.eu/rest/v2/all'
    )
    this.$store.commit('gini/SET_COUNTRIES', data)
  }
}
</script>
