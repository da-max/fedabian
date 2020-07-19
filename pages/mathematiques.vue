<template>
  <main class="uk-container">
    <section
      class="uk-light uk-margin-large-top uk-padding uk-margin-large-bottom uk-background-default"
    >
      <div uk-grid>
        <div class="uk-width-1-4@m">
          <mathematics-nav></mathematics-nav>
        </div>
        <article class="uk-width-expand">
          <nuxt-child></nuxt-child>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import MathematicsNav from '~/components/mathematics/Nav'
export default {
  name: 'Mathematics',
  components: { MathematicsNav }
}
</script>
