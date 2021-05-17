<template>
  <section class="main-section">
    <ProjectsHeader class="main-section-header" />
    <ProjectsContent />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Projects extends Vue {
  name: string = 'Projects'
}
</script>

<style lang="scss" scoped>
.main-section {
  @apply flex flex-col items-center;
}
</style>
