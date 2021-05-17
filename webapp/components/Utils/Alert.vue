<template>
  <div :class="['alert', status]">
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Alert extends Vue {
  name: string = 'Alert'
  @Prop({ required: false, default: 'success' }) readonly status: string
}
</script>

<style lang="scss" scoped>
.dark-mode {
  .alert {
    &.success {
      @apply border-inverse-success bg-success;
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
  @apply p-2 rounded flex justify-center items-center;

  &.success {
    @apply border border-success bg-inverse-success;
  }

  &.warning {
    @apply border border-warning bg-inverse-warning;
  }

  &.danger {
    @apply border border-danger bg-inverse-danger;
  }
}
</style>
