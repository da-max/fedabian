<template>
  <header class="container">
    <h1><slot name="title" /></h1>
    <p><slot name="content" /></p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UtilsHeader extends Vue {
  name: sting = 'Header.vue'
}
</script>
