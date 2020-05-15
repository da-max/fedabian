<template>
  <div
    :class="[
      'uk-card',
      'uk-card-' + theme,
      { 'uk-border-rounded': borderRounded },
      { 'uk-padding-large': padding }
    ]"
  >
    <div v-if="header" class="uk-card-header">
      <slot name="header"></slot>
    </div>
    <div class="uk-card-body">
      <slot name="body"></slot>
    </div>
    <div v-if="footer" class="uk-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    borderRounded: { default: true, type: Boolean },
    theme: { default: 'default', type: String },
    header: { default: false, type: Boolean },
    footer: { default: false, type: Boolean },
    padding: { default: false, type: Boolean }
  }
}
</script>
