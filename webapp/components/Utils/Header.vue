<template>
  <header class="container">
    <h1><slot name="title" /></h1>
    <p><slot name="content" /></p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  name: string = 'Header.vue'
}
</script>
