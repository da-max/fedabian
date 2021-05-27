<template>
  <UtilsCard :class="['card', {'in-progress': technology.inProgress}]">
    <template #header>
      <span v-for="icon in technology.icons" :key="icon[1]">
        <FontAwesomeIcon
          v-if="typeof(icon) === 'object'"
          :icon="icon"
          :class="icon[1]"
        />
        <span v-else v-html="icon" />
      </span>
      <h2>{{ technology.title }}</h2>
    </template>
    <template #content>
      <div v-html="technology.content" />
    </template>
  </UtilsCard>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import type { ITechnology } from '~/types/portfolio.model'

@Component
export default class AboutTechnology extends Vue {
  name: string = 'Technology.vue'

  @Prop({ type: Object, required: true }) readonly technology!: ITechnology
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .in-progress {
    @apply bg-secondary text-inverse-secondary;
  }
}

.in-progress {
  @apply bg-inverse-secondary text-secondary;
}
</style>
