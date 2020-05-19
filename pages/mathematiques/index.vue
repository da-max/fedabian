<template>
  <section class="uk-margin-large-top uk-margin-large-bottom">
    <article
      class="uk-tile uk-tile-default uk-light uk-width-2-3@m uk-border-rounded uk-margin-auto"
      uk-scrollspy="taget: > div > *; cls: uk-animation-fade; delay: 500"
    >
      <div v-html="$md.render(content)"></div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Mathematics',
  async asyncData({ $axios, $md, error }) {
    try {
      const content = await $axios.$get(
        'https://gitlab.com/Damax/mathematiques/-/raw/maste/probabilites/loi_normale.md'
      )
      return { content }
    } catch (err) {
      console.log(err.response)

      error({
        statusCode: err.response,
        message: err.response
      })
    }
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
