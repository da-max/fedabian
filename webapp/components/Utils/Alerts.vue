<template>
  <transition-group class="alerts" tag="aside" name="alert">
    <UtilsAlert v-for="alert in alerts" :key="alert.id" :alert="alert" />
  </transition-group>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IAlert } from '~/types/utils.model'
import { alertStore } from '~/store'

@Component
export default class Alerts extends Vue {
  name: string = 'Alerts'

  get alerts (): IAlert[] {
    return alertStore.alerts
  }
}
</script>

<style lang="scss" scoped>
aside {
  @apply fixed left-0 bottom-0;
}

.alert-enter-active, .alert-enter-leave {
  @apply transition-opacity duration-300;
}

.alert-enter, .alert-leave-to {
  @apply opacity-0;
}

</style>
