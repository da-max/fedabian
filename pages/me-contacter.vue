<template>
  <div>
    <section class="uk-text-center uk-margin-large-top">
      <h1 class="uk-text-bold">Me contacter</h1>
      <p class="uk-text-large">
        Vous pouvez me contacter via le formulaire ci-dessous, par mail ou
        encore via mes réseaux sociaux.
      </p>
      <alerts />
      <div
        class="skew-y-3 uk-margin-xlarge-top uk-light uk-tile uk-tile-default padding-xlarge-top padding-xlarge-bottom"
      >
        <div
          v-show="messages !== Array"
          id="messages"
          class="uk-width-1-2@s uk-margin-auto uk-margin-large-bottom"
        >
          <div class="uk-alert-" uk-alert>
            <a class="uk-alert-close" uk-close></a>
          </div>
        </div>
        <contact-form />
      </div>
    </section>

    <section class="uk-margin-xlarge-top uk-margin-xlarge-bottom">
      <div
        uk-grid
        class="uk-grid-large uk-child-width-1-4@m uk-text-center uk-light"
      >
        <div>
          <font-awesome-icon :icon="['fas', 'envelope']" size="3x" />
          <h3>Email</h3>
          <p>maxime.benhassen@tutanota.com</p>
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
          <h3>Twitter</h3>
          <p>@Damaaax</p>
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'mastodon']" size="3x" />
          <h3>Mastodon</h3>
          <p>@Damax@framapiaf.org</p>
        </div>
        <div>
          <font-awesome-icon :icon="['fab', 'gitlab']" size="3x" />
          <h3>Gitlab</h3>
          <p>@Damax</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '~/components/portfolio/ContactForm'
import Alerts from '~/components/utility/Alerts'
export default {
  name: 'Contact',
  components: {
    ContactForm,
    Alerts
  },

  data() {
    return {
      messages: Array
    }
  }
}
</script>
