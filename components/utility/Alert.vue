<template>
  <div
    uk-alert
    :class="
      'uk-border-rounded uk-padding-small uk-box-shadow-small uk-box-shadow-hover-large uk-alert-' +
        status
    "
  >
    <a v-show="close" class="uk-alert-close" uk-close></a>
    <div v-show="header">
      <h2 :class="'uk-text-center uk-text-' + status">
        <slot name="header"></slot>
      </h2>
    </div>
    <p>
      <slot name="body"></slot>
    </p>
    <hr />
    <p>
      <slot name="footer">
        Si vous rencontrez un problème, vous pouvez me contacter à l’adresse :
        maxime.benhassen@tutanota.com
      </slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Alert',

  props: {
    close: {
      default: true,
      type: Boolean
    },
    header: {
      default: false,
      type: Boolean
    },
    status: {
      default: 'primary',
      type: String
    }
  }
}
</script>
