<template>
  <Card class="card">
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
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import type { ITechnology } from '@/types/technology.model'

@Component
export default class AboutTechnology extends Vue {
  name: string = 'AboutTechnology'

  @Prop({ type: Object, required: true }) readonly technology!: ITechnology
}
</script>
