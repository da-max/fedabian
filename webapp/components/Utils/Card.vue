<template>
  <aside :class="['card', {'card-hover': hover, 'card-transparent': transparent, 'card-small': small}]">
    <header>
      <slot name="header" />
    </header>
    <section>
      <slot name="content" />
    </section>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  name: string = 'Card'
  @Prop({ required: false, default: false }) readonly hover: boolean|undefined
  @Prop({ required: false, default: false }) readonly transparent: boolean|undefined
  @Prop({ required: false, default: false }) readonly small: boolean|undefined
}
</script>
