<template>
  <aside class="card">
    <header>
      <slot name="header" />
    </header>
    <section>
      <slot name="content" />
    </section>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  name: string = 'Card'
}
</script>
