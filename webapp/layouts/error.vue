<template>
  <section class="main-section">
    <h1>{{ errorContent.title }}</h1>
    <section class="skew">
      <img :src="errorContent.image.src" :alt="errorContent.image.alt">
      <p>
        {{ errorContent.message }}
      </p>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { IError } from '~/types/error.model'

@Component
export default class Error extends Vue {
  name: string = 'error'
  @Prop({ required: false }) error

  @Watch('error')
  get errorContent (): IError {
    if (this.error.statusCode === 404) {
      return {
        title: 'Page non trouvé',
        message: 'La page demandée n’a pas été trouvé',
        image: {
          src: '/images/404.gif',
          alt: 'Image animée de « bode l’éponge » perdu'
        }
      } as IError
    } else {
      return {
        title: 'Page non trouvé',
        message: 'La page demandé n’a pas été trouvé',
        image: {
          src: '~/assets/images/404.gif',
          alt: 'Image animée de « bode l’éponge » perdu'
        }
      } as IError
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  @apply m-auto mb-10 shadow-2xl rounded
}
p {
  @apply font-bold
}
</style>
