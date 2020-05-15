<template>
  <span
    class="uk-background-secondary uk-padding-small uk-border-circle text-orange-500 uk-inline-block"
  >
    <font-awesome-icon :icon="icon" :size="size" />
  </span>
</template>

<script>
export default {
  name: 'CustomFontAwesomeIcon',

  props: {
    icon: {
      default() {
        return ['far', 'user']
      },
      type: Array
    },
    size: {
      default() {
        return '1x'
      },
      type: String
    }
  }
}
</script>
