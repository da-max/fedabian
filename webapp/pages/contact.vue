<template>
  <section class="main-section">
    <ContactHeader class="main-section-header" />
    <ContactContent />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
  name: string = 'Contact'
}
</script>
