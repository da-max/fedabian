<template>
  <div :class="['alert', alert.status, alert.pos]">
    <div class="alert-header">
      <h1>{{ alert.title }}</h1>
      <FontAwesomeIcon
        class="close-icon"
        :icon="['fa', 'times']"
        @click="removeAlert"
      />
    </div>
    <p>{{ alert.content }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { alertStore } from '~/store'
import { IAlert } from '~/types/utils.model'

@Component
export default class Alert extends Vue {
  name: string = 'alert'
  @Prop({ required: true }) readonly alert: IAlert | undefined

  constructor () {
    super()
    if (this.alert && this.alert.timeout) {
      window.setTimeout(() => {
        this.removeAlert()
      }, this.alert.timeout)
    }
  }

  removeAlert (): void {
    if (this.alert) {
      alertStore.REMOVE_ALERT(this.alert)
    }
  }
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .alert {
    &.success {
      @apply border-inverse-success bg-success;
      .close-icon:hover {
        @apply text-inverse-success;
      }
    }

    &.warning {
      @apply border-inverse-warning bg-warning;
    }

    &.danger {
      @apply border-inverse-danger bg-danger;
    }
  }
}

.alert {
  @apply bg-inverse-default p-2 rounded m-8 transition-all duration-300;

  &:hover {
    @apply shadow-xl;
  }

  &.success {
    @apply border-success bg-inverse-success;
  }

  &.warning {
    @apply border-warning bg-inverse-warning;
  }

  &.danger {
    @apply border-danger bg-inverse-danger;
  }

  &.top-right {
    @apply right-0 top-0;
  }

  &.top-left {
    @apply left-0 top-0;
  }

  &.bottom-right {
    @apply bottom-0 right-0
  }

  &.bottom-left {
    @apply bottom-0 left-0;
  }

  .alert-header {
    @apply grid grid-cols-12;
    h1 {
      @apply col-span-11 text-base;
    }

    .close-icon {
      @apply mt-1 cursor-pointer transition-colors duration-300;
      &:hover {
        @apply text-success;
      }
    }
  }

}
</style>
