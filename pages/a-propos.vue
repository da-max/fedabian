<template>
  <div>
    <section class="uk-text-center uk-margin-large-top">
      <div uk-scrollspy="target: > div > *; cls: uk-animation-fade; delay: 100">
        <div class="uk-margin-xlarge-bottom">
          <h1 class="uk-text-bold">Biographie</h1>
          <br />
          <p class="uk-text-large">
            Dès l’âge de 14 ans j’apprends de nombreux langages de
            programmations et à créer des sites web.
          </p>
        </div>
        <div
          class="skew-y-3 uk-tile-default uk-tile padding-xlarge-top padding-xlarge-bottom uk-light uk-margin-xlarge-bottom"
        >
          <div uk-grid class="uk-child-width-1-2@m uk-child-1-1">
            <div class="uk-visible@m">
              <img
                uk-img
                width="700px"
                src="~/assets/images/about.png"
                alt="Image perso pour biographie"
              />
            </div>
            <div>
              <h4 class="uk-text-large">
                Lycéen, j’apprends la programmation de manière autodidacte.
              </h4>
              <ul class="uk-list">
                <li class="uk-text-justify">
                  Depuis 2016, j’ai appris de nombreux langages tel que l’HTML,
                  le CSS, le PHP, le Python, le JavaScript. Différents projets
                  m’ont permis de m’exercer et d’apprendre ces langages en
                  profondeur. Très rapidement, j’ai été amené à préférer
                  certains langages à d’autres et donc à utiliser des
                  technologies me permettant d’accélérer les tâches que je
                  appréciais le moins. Ainsi, aujourd’hui, j’utilise des
                  frameworks CSS afin de faciliter le design et l’organisation
                  visuel des sites que je conçois (je n’ai aucune connaissance
                  en design).
                </li>
                <li class="uk-text-justify">
                  Au fur et à mesure de mon apprentissage, j’ai été amené à
                  faire des choix quant aux technologies que je devais utiliser.
                  PHP ou Python ? React ou Vue ? J’ai dû faire des choix. Le
                  Python étant un langage de plus en plus populaire (aussi bien
                  dans le domaine du Web que celui du Machine Learning ou de
                  l’enseignement) j’ai décidé de me concentrer sur
                  l’apprentissage de ce langage. Je n’ai pas appris le React
                  pour plusieurs raisons, la première est sa complexité (qui est
                  bien supérieure à Vue), mais également son concepteur original
                  (Facebook), en effet, ne partageant pas le modèle économique
                  de cette société, j’ai décidé de développer des sites avec
                  VueJs (quand son utilisation était nécessaire).
                </li>
                <!--<li><button href="" class="uk-button uk-button-primary uk-text-bold">Télécharger mon cv</button></li>-->
              </ul>
            </div>
          </div>
        </div>
        <div
          class="uk-child-width-1-2@l uk-child-width-auto uk-width-3-4@m uk-margin-auto uk-grid-large uk-light"
          uk-grid
        >
          <div>
            <ul class="uk-list">
              <li>
                <font-awesome-icon :icon="['far', 'folder-open']" size="4x" />
              </li>
              <li>Projets | 4</li>
              <li class="uk-margin-top">
                J’essaye de m’investir dans des projets autant variés que
                possible : création de sites internet, rédaction de
                documentations (fedora-fr) ou participation à des événements
                autour de logiciel libre (JDLL, Ubuntu-party).
              </li>
            </ul>
          </div>
          <div>
            <ul class="uk-list">
              <li><font-awesome-icon :icon="['far', 'user']" size="4x" /></li>
              <li>Clients | 3</li>
              <li class="uk-margin-top">
                La plupart des personnes avec qui je travaille sont, avant
                d’être des clients, des amies ou des associations que
                j’affectionne et côtoie.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      class="uk-text-center uk-margin-xlarge-top uk-margin-xlarge-bottom uk-padding-large-bottom"
      uk-scrollspy="target: > h1, div; cls: uk-animation-fade; delay: 100"
    >
      <h1 class="uk-text-bold uk-margin-xlarge-bottom uk-margin-xlarge-top">
        Mes technologies
      </h1>

      <div
        uk-grid
        class="uk-light uk-flex-center uk-child-width-1-3@l uk-child-width-1-4@xl uk-child-width-1-2@m uk-grid-match uk-margin-large-top uk-margin-small-left uk-margin-medium-right"
      >
        <div>
          <card>
            <template #body>
              <custom-font-awesome-icon :icon="['fab', 'html5']" size="2x" />
              <h3>HTML</h3>
              <p class="uk-light">
                J’ai appris l’HTML (et le CSS) il y a 5 ans, d’abord sans but
                bien précis, ces langages, Ils m’ont permis de découvrir une
                première facette, plutôt simple, de l’informatique.
              </p>
            </template>
          </card>
        </div>

        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'js']" size="2x" />
            <h3>JavaScript</h3>
            <p class="uk-light">
              Bien que cela puisse paraître paradoxal, je me sens beaucoup plus
              à l’aise en créant un site avec Vue.js qu’en codant en JavaScript
              « pur ». En effet, je trouve que Vue.js rend le code plus lisible
              et plus cohérent que le JavaScript « pur ».
            </p>
            <p class="uk-light">
              Depuis début 2020, j’apprends à utiliser NodeJs avec le framework
              ExpressJs, ce site est d’ailleurs codé avec ExpressJs et NuxtJs.
            </p>
          </div>
        </div>
        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'python']" size="2x" />
            <h3>Python</h3>
            <p class="uk-light">
              Tout comme JavaScript et Vue.js, je préfère créer un site avec
              Django qu’en Python «pure». Le framework Django m’a permis de
              revoir quelques subtilités de Python, cependant, je n’ai, à ce
              jour, pas de projet en python « pur ».
            </p>
          </div>
        </div>
        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'css3-alt']" size="2x" />
            <h3>CSS</h3>
            <p class="uk-light">
              N'étant pas un spécialiste du CSS, j’ai rapidement envisagé
              l’utilisation de framework CSS. Bootstrap, UIkit sont des
              frameworks que je maîtrise bien. Ce site est construit grâce à
              <a href="https://getuikit.com">UIkit</a>.
            </p>
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div
            class="uk-margin-auto uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'linux']" size="2x" />
            <h3>Linux</h3>
            <p class="uk-light">
              Linux a toujours eu une place très importante dans mon
              apprentissage de l’informatique, en effet, j’utilise Linux
              (d’abord Ubuntu puis Fedora) depuis 10 ans. Au départ simple
              utilisateur, j’apprends et prend pars à différents projets autour
              du logiciel libre en 2018. Je connais donc plutôt bien les
              environnements UNIX et le BASH.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from '~/components/utility/Card'
import CustomFontAwesomeIcon from '~/components/utility/CustomFontAwesomeIcon'
export default {
  name: 'About',
  components: {
    Card,
    CustomFontAwesomeIcon
  },

  head() {
    return {
      title: 'A propos | Fedabian',
      meta: [
        {
          hid: 'description-page',
          name: 'description',
          content: 'Biographie de Maxime `Da-max` Ben Hassen'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'maxime benhassen, maxime benhassen portfolio, maxime benhassen développeur web, maxime benhassen étudiant, maxime benhassen biographie, da-max portfolio, da-max développeur, da-max, fedabian développeur, fedabian portfolio, fedabian biographie'
        }
      ]
    }
  }
}
</script>
