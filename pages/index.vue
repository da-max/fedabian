<template>
  <div class="container">
    <header uk-height-viewport>
      <div
        class="uk-text-bold uk-position-center uk-text-center uk-text-large text-orange-900"
        uk-scrollspy="target: > h1, p, a; cls: uk-animation-scale-down; delay: 100"
      >
        <h1 class="text-orange-900">Site 1</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          nostrum facilis, repudiandae blanditiis similique ut.
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
        <h2>Lorem, ipsum.</h2>
        <div class="uk-margin-xlarge-bottom uk-margin-medium-top">
          <a href="https://openclassrooms.com/" class="uk-link-reset">Lorem</a>,
          <a href="https://developer.mozilla.org/fr/" class="uk-link-reset"
            >Lorem, ipsum.</a
          >, <a href="https://youtube.com" class="uk-link-reset">Lorem</a> et
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          necessitatibus facere sunt dolorum hic dolor fugit asperiores aliquam
          accusantium praesentium!
        </div>
      </div>

      <div
        class="uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-4@l"
        uk-grid
        uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 100"
      >
        <div>
          <custom-font-awesome-icon :icon="['far', 'file-code']" size="2x" />

          <h3>Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo
            in facilis veritatis animi totam pariatur ducimus minus maxime
            quidem velit atque officiis tempore facere iusto quaerat consequatur
            dolor alias, est dolorum molestias optio, laborum perspiciatis!
            Corporis voluptas provident similique iusto dolor labore animi quam,
            consequatur veniam necessitatibus laborum sit.
          </p>
        </div>
        <div>
          <custom-font-awesome-icon :icon="['fab', 'linux']" size="2x" />

          <h3>Lorem</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            doloremque, excepturi adipisci ut numquam molestias. Quos tempora
            totam doloremque, provident excepturi molestiae recusandae omnis
            ratione, illo, laudantium qui voluptatem sint!
          </p>
        </div>
        <div>
          <custom-font-awesome-icon :icon="['fab', 'python']" size="2x" />

          <h3>Lorem</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            quisquam dignissimos voluptate earum aliquam accusantium nulla, ea
            molestias deleniti natus enim cupiditate ut ipsa alias, eligendi
            eius id expedita in?
          </p>
        </div>
        <div class="uk-margin-xlarge-bottom">
          <custom-font-awesome-icon :icon="['fab', 'linux']" size="2x" />

          <h3>Lorem</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, nam
            voluptatem obcaecati pariatur atque aut voluptate repellendus
            laboriosam? Quidem, asperiores labore! Asperiores, voluptas officia
            vel excepturi mollitia dignissimos accusantium alias.
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
            <li class="uk-text-large">Lorem</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <ul class="uk-list">
            <li>
              <font-awesome-icon :icon="['far', 'folder-open']" class="fa-4x" />
            </li>
            <li class="uk-text-large">Lorem</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div class="text-center uk-margin-large-top">
        <nuxt-link
          class="uk-button uk-button-primary uk-text-bold"
          to="/mes-projets"
          >Lien ...</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import CustomFontAwesomeIcon from '~/components/utility/CustomFontAwesomeIcon'
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
