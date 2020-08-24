<template>
  <form
    class="uk-form-horizontal uk-margin-auto"
    method="post"
    @submit.prevent="sendMail"
  >
    <div uk-grid class="uk-child-width-1-2@m uk-grid-large">
      <div>
        <label for="name" class="uk-form-label">Nom</label>
        <div class="uk-form-controls">
          <input
            v-model="contact.name"
            type="text"
            name="name"
            class="uk-input"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div>
        <label for="email" class="uk-form-label">Email</label>
        <div class="uk-form-controls">
          <input
            v-model="contact.email"
            type="email"
            name="email"
            class="uk-input"
            placeholder="Votre email"
          />
        </div>
      </div>
    </div>
    <div class="uk-margin-medium-top">
      <label for="message" class="uk-form-label">Message</label>
      <div class="uk-form-controls">
        <textarea
          v-model="contact.message"
          name="message"
          class="uk-textarea"
          placeholder="Votre message"
        ></textarea>
      </div>
    </div>
    <input
      type="submit"
      class="uk-button uk-button-primary uk-margin-medium-top"
      value="Envoyer un message"
    />
  </form>
</template>

<script>
export default {
  name: 'ContactForm',

  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    async sendMail() {
      try {
        await this.$axios.$post('/send-mail', this.contact)
        this.$store.commit('alerts/ADD_ALERTS', {
          id: this.$store.state.alerts.alertId,
          close: true,
          header: true,
          headerContent: 'Mail envoyé.',
          body:
            'Votre mail a bien été envoyé, je vous répondrai dans le plus rapidement possible.',
          status: 'success'
        })
        this.contact = {}
      } catch (err) {
        if (err.response.statusCode === 400) {
          this.$store.commit('alerts/ADD_400')
        } else if (err.response.statusCode === 500) {
          this.$store.commit('alerts/ADD_500')
        } else {
          this.$store.commit('alerts/ADD_UNKNOWN')
        }
      }
    }
  }
}
</script>
