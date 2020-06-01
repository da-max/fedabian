<template>
  <div>
    <section class="uk-text-center uk-margin-large-top">
      <div uk-scrollspy="target: > div > *; cls: uk-animation-fade; delay: 100">
        <div class="uk-margin-xlarge-bottom">
          <h1 class="uk-text-bold">Lorem</h1>
          <br />
          <p class="uk-text-large">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            laudantium?
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
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </h4>
              <ul class="uk-list">
                <li class="uk-text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  incidunt impedit vero cum facere. Quo saepe culpa labore
                  minima animi unde neque mollitia odit cum molestiae, placeat,
                  quisquam nulla, ab facilis nisi veniam architecto dolorem sed
                  debitis suscipit perspiciatis laudantium praesentium
                  doloremque ipsa. Ea in nemo veritatis velit animi ut.
                </li>
                <li class="uk-text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, enim minima perferendis ullam temporibus officia sunt
                  tempore veniam vitae ducimus laudantium illum deleniti quis
                  quo magnam quos earum odio! Assumenda dolorem perferendis quo
                  aliquid iusto corrupti, laborum ipsa aperiam recusandae
                  obcaecati animi voluptatibus. Quos, similique debitis, qui
                  suscipit dolore earum, mollitia in illum quae provident nemo
                  laborum. Impedit commodi tempore culpa odio harum aliquam
                  temporibus, accusamus dignissimos fugit non. Iure culpa natus
                  et dolores consectetur sed esse nihil quo! Laudantium
                  excepturi consequatur aut nemo earum a consectetur voluptatem
                  eligendi cum, accusantium similique temporibus modi dolorem
                  deserunt magni illum neque! Consequuntur?
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
              <li>Lorem | 4</li>
              <li class="uk-margin-top">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                temporibus quibusdam, amet eveniet officiis omnis qui voluptates
                dolorum facilis, fugiat pariatur obcaecati autem vitae. Earum
                ipsam odio excepturi ipsum impedit?
              </li>
            </ul>
          </div>
          <div>
            <ul class="uk-list">
              <li><font-awesome-icon :icon="['far', 'user']" size="4x" /></li>
              <li>Lorem | 3</li>
              <li class="uk-margin-top">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                pariatur, vel eius ullam asperiores quaerat reprehenderit
                laboriosam nostrum quae optio totam repellendus fuga ipsum!
                Quasi optio eveniet similique eos iure.
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
        Lorem
      </h1>

      <div
        uk-grid
        class="uk-light uk-flex-center uk-child-width-1-3@l uk-child-width-1-4@xl uk-child-width-1-2@m uk-grid-match uk-margin-large-top uk-margin-small-left uk-margin-medium-right"
      >
        <div>
          <card>
            <template #body>
              <custom-font-awesome-icon :icon="['fab', 'html5']" size="2x" />
              <h3>Lorem</h3>
              <p class="uk-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                pariatur ea nobis recusandae iure saepe, atque officiis adipisci
                eos minus?
              </p>
            </template>
          </card>
        </div>

        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'js']" size="2x" />
            <h3>Lorem</h3>
            <p class="uk-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              dicta itaque odit animi laboriosam debitis temporibus iure numquam
              omnis! Dolor non quidem provident impedit rerum necessitatibus
              cumque, enim doloremque suscipit.
            </p>
            <p class="uk-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              culpa quis esse maiores dicta quaerat recusandae minus natus, sed
              amet!
            </p>
          </div>
        </div>
        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'python']" size="2x" />
            <h3>Lorem</h3>
            <p class="uk-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores perspiciatis dolorum quis ipsum blanditiis architecto
              iusto ullam delectus laboriosam! Eos, eius molestias harum odio
              accusamus iste natus assumenda provident. Tempora!
            </p>
          </div>
        </div>
        <div>
          <div
            class="uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'css3-alt']" size="2x" />
            <h3>Lorem</h3>
            <p class="uk-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              laborum praesentium modi distinctio veniam tempora mollitia optio
              animi inventore dignissimos neque, hic commodi magnam fuga, id
              accusamus libero numquam sit.
              <a href="https://getuikit.com">Lien</a>.
            </p>
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div
            class="uk-margin-auto uk-card uk-card-default uk-card-body uk-padding-medium uk-border-rounded"
          >
            <custom-font-awesome-icon :icon="['fab', 'linux']" size="2x" />
            <h3>Lorem</h3>
            <p class="uk-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo nihil commodi quia iste omnis libero maiores animi
              veritatis. Rerum aliquam recusandae sunt libero commodi! Ut enim
              quas hic, nobis illum alias voluptatibus est veniam architecto
              odit voluptatum eum. Harum, excepturi!
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
