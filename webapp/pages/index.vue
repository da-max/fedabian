<template>
  <section>
    <IndexHeader />
    <IndexContent />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  name: string = 'Index'
}
</script>

<style lang="scss" scoped>
section {
  @apply flex-1
}
</style>
