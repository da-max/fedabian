<template>
  <div class="container">
    <header uk-height-viewport>
      <div
        class="uk-text-bold uk-position-center uk-text-center uk-text-large text-orange-900"
        uk-scrollspy="target: > h1, p, a; cls: uk-animation-scale-down; delay: 100"
      >
        <h1 class="text-orange-900">Fedabian</h1>
        <p>
          Lycéen, passionné d’informatique et de mathématiques, bienvenue sur
          Fedabian.fr.
        </p>
        <nuxt-link to="a-propos" class="uk-button uk-button-primary"
          >En savoir plus ...</nuxt-link
        >
      </div>
    </header>

    <section
      class="uk-padding-large uk-tile uk-tile-default skew-y-3 uk-light uk-text-center"
    >
      <div uk-scrollspy="target: > div, h2; cls: uk-animation-fade; delay: 100">
        <h2>Mes technologies</h2>
        <div class="uk-margin-xlarge-bottom uk-margin-medium-top">
          <a href="https://openclassrooms.com/" class="uk-link-reset"
            >Openclassrooms</a
          >,
          <a href="https://developer.mozilla.org/fr/" class="uk-link-reset"
            >la MDN</a
          >, <a href="https://youtube.com" class="uk-link-reset">Youtube</a> et
          les documentations sont les seules ressources/cours qui m’ont permis
          d‘apprendre la programmation.
        </div>
      </div>

      <div
        class="uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-4@l"
        uk-grid
        uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
      >
        <div>
          <custom-font-awesome-icon :icon="['far', 'file-code']" size="2x" />

          <h3>HTML/CSS</h3>
          <p>
            J’ai appris l’HTML et le CSS il y a 5 ans, d‘abord sans but bien
            précis, ces langages, Ils m’ont permis de découvrir une première
            facette, plutôt simple, de l‘informatique.
          </p>
        </div>
        <div>
          <custom-font-awesome-icon :icon="['fab', 'linux']" size="2x" />

          <h3>JavaScript</h3>
          <p>
            J’ai ensuite appris le JavaScript, jusqu’en 2019, je n‘ai que très
            peu utilisé ce langage. Aujourd’hui, j‘utilise ce langage dans de
            nombreux projets avec le framework Vue.js.
          </p>
        </div>
        <div>
          <custom-font-awesome-icon :icon="['fab', 'python']" size="2x" />

          <h3>Python</h3>
          <p>
            Je découvre et apprend le python en 2016 sans vraiment m’en servir
            dans de véritables projets. Ce n’est que deux ans plus tard que je
            décide de créer un site web grâce au framework django, aujourd’hui,
            tout mes projets utilisent Django.
          </p>
        </div>
        <div class="uk-margin-xlarge-bottom">
          <custom-font-awesome-icon :icon="['fab', 'linux']" size="2x" />

          <h3>Linux</h3>
          <p>
            J’utilise Linux (d'abord Ubuntu puis Fedora) depuis 10 ans. Au
            départ simple utilisateur, j’apprend et prend pars à différent
            projets autour du logiciel libre en 2018. Je connais donc plutôt
            bien les environnements UNIX et le BASH.
          </p>
        </div>
      </div>
    </section>

    <section
      class="uk-margin-xlarge-top uk-margin-xlarge-bottom uk-text-center uk-light"
      uk-scrollspy="target: > div > div, a; cls: uk-animation-fade; delay: 100"
    >
      <div uk-grid class="uk-child-width-expand@s">
        <div>
          <ul class="uk-list">
            <li>
              <font-awesome-icon :icon="['far', 'user']" class="fa-4x" />
            </li>
            <li class="uk-text-large">Clients</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <ul class="uk-list">
            <li>
              <font-awesome-icon :icon="['far', 'folder-open']" class="fa-4x" />
            </li>
            <li class="uk-text-large">Projets</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div class="text-center uk-margin-large-top">
        <nuxt-link
          class="uk-button uk-button-primary uk-text-bold"
          to="/mes-projets"
          >Découvrir mes projets ...</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import CustomFontAwesomeIcon from '~/components/Utils/CustomFontAwesomeIcon'
export default {
  name: 'Index',
  components: {
    CustomFontAwesomeIcon
  },
  head() {
    return {
      title: 'Accueil | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Portfolio de Maxime `Da-max` Ben Hassen, développeur web.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Maxime `Da-max` Ben Hassen, développeur web, maxime benhassen, portfolio da-max, Maxime Ben Hassen portfolio'
        }
      ]
    }
  }
}
</script>

<style src="@/assets/scss/portfolio.scss" lang="scss"></style>
