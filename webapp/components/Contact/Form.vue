<template>
  <form action="#" class="contact-form">
    <UtilsAlert v-show="res">
      <p>Votre message a bien été envoyé.</p>
    </UtilsAlert>
    <UtilsAlert v-show="res === false" status="danger">
      <p>Une erreur est survenue, merci de réessayer.</p>
    </UtilsAlert>
    <UtilsFormInput v-model="message.name" input-name="name" placeholder="Da-max">
      Votre nom
    </UtilsFormInput>
    <UtilsFormInput
      v-model="message.email"
      type="email"
      input-name="email"
      placeholder="maxime.benhassen@fedabian.fr"
    >
      Votre email
    </UtilsFormInput>
    <UtilsFormTextarea
      v-model="message.content"
      input-name="message"
      class="contact-content-container"
      placeholder="Bonjour…"
    >
      Votre message
    </UtilsFormTextarea>
    <div class="contact-submit-container">
      <button type="submit" class="btn btn-primary" @click="sendMail">
        Envoyer le message
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IMessage } from '~/types/message.model'

import sendContactMail from '~/apollo/sendContactMail.gql'

@Component
export default class Form extends Vue {
  name: string = 'Form'
  message: IMessage = {
    name: '',
    content: '',
    email: ''
  }

  res: Boolean|null = null

  async sendMail (event: Event) :void {
    if (this.message.email && this.message.content && this.message.name) {
      event.preventDefault()
      const res = await this.$apollo.mutate({
        mutation: sendContactMail,
        variables: {
          ...this.message
        }
      })
      this.res = res.data.sendContactMail.ok
      if (this.res) {
        this.message = {
          name: '',
          content: '',
          email: ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  @apply grid grid-cols-2 grid-rows-2 gap-10;
  > * {
    @apply col-span-full;
  }

  > * > div {
    @apply mt-2;
  }

  .alert {
    @apply col-span-full;
  }

  textarea, input {
    @apply w-2/3;
  }

  input {
    @apply h-full;
  }
}

@screen xl {
  .contact-form {
    > * {
      @apply col-span-1;
    }
    .contact-content-container {
      @apply col-span-2
    }

    .contact-submit-container {
      @apply col-span-full text-center;
    }
  }
}
</style>
