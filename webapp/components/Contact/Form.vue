<template>
  <form action="#" class="contact-form">
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
import { Component, Vue } from 'nuxt-property-decorator'
import { FetchResult } from 'apollo-link'
import { IMessage } from '~/types/portfolio.model'

import SEND_CONTACT_MAIL from '~/apollo/sendContactMail.gql'
import { alertStore } from '~/store'

@Component
export default class Form extends Vue {
  name: string = 'Form'
  message: IMessage = {
    name: '',
    content: '',
    email: ''
  }

  res: Boolean|null = null

  async sendMail (event: Event) :Promise<void> {
    if (this.message.email && this.message.content && this.message.name) {
      event.preventDefault()
      const res: FetchResult = await this.$apollo.mutate({
        mutation: SEND_CONTACT_MAIL,
        variables: {
          ...this.message
        }
      })
      if (res.data && res.data.sendContactMail.ok) {
        alertStore.ADD_ALERT({
          title: 'Message envoyé !',
          content: 'Votre message a bien été envoyé, je vous répondrais le plus vite possible.',
          status: 'success'
        })
        this.message = {
          email: '',
          name: '',
          content: ''
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
