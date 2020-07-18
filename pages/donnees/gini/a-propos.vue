<template>
  <section class="uk-article">
    <h1 class="uk-text-center uk-article-title">À propos</h1>
    <hr />
    <h2 class="uk-lead">
      Où trouver les données utilisées par cette application ?
    </h2>
    <p>
      Les données utilisées par cette application sont issues du site
      <a
        href="http://restcountries.eu"
        target="_blank"
        rel="noopener noreferrer"
        >restcountries.eu</a
      >. Le projet étant sous licence
      <a
        href="https://www.mozilla.org/en-US/MPL/2.0/"
        target="_blank"
        rel="noopener noreferrer"
        >MPL 2.0</a
      >, elles sont donc accessibles gratuitement et librement, vous pouvez donc
      contribuer au projet via github :
      <a
        href="https://github.com/apilayer/restcountries"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/apilayer/restcountries</a
      >.
    </p>
    <h2 class="uk-lead">Avec quoi est faite cette application ?</h2>
    <p>
      L’application « Gini » a été entièrement écrite en JavaScript avec le
      framework
      <a href="http://nuxtjs.org" target="_blank">NuxtJs</a> (utilisant
      <a href="http://vuejs.org" target="_blank">VueJs</a>). Pour l’affichage de
      la carte, j’ai utilisé
      <a
        href="https://schlunsen.github.io/nuxt-leaflet/"
        target="_blank"
        rel="noopener noreferrer"
        >nuxt-leaflet</a
      >
      (<a
        href="https://github.com/schlunsen/nuxt-leaflet"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/schlunsen/nuxt-leaflet</a
      >).
    </p>
  </section>
</template>

<script>
export default {
  name: 'GiniAbout',
  head() {
    return {
      title: 'A propos de cette application | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'À propos de l’application « Gini »'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Nuxtjs coefficient de Gini, coefficient de Gini dans le monde, restcountries coefficient de Gini'
        }
      ]
    }
  }
}
</script>
