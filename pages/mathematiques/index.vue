<template>
  <main class="uk-margin-large-top uk-margin-large-bottom">
    <section
      class="uk-tile uk-tile-default uk-light uk-container uk-border-rounded uk-margin-auto"
      uk-scrollspy="taget: > div > *; cls: uk-animation-fade; delay: 500"
    >
      <!-- eslint-disable-next-line vue/no-v-html -->
      <article v-html="$md.render(content)"></article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MathematicsIndex',
  async fetch() {
    try {
      const content = await this.$mathematicsApi.$get('README.md/raw', {
        params: { ref: 'master' }
      })
      this.content = content
    } catch (err) {
      console.log(err.response)

      this.$error({
        statusCode: err.response,
        message: err.response
      })
    }
  },

  data() {
    return {
      content: ''
    }
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
