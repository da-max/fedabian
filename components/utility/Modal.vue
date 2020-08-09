<template>
  <div
    :class="{
      'uk-flex-top': center,
      'uk-modal-container': container,
      'uk-modal-full': full
    }"
    :uk-modal="'bg-close: ' + bgClose"
  >
    <div :class="['uk-modal-dialog', { 'uk-magin-auto-vertical': center }]">
      <button
        v-show="closeButton"
        :class="{
          'uk-modal-close-default': !full,
          'uk-modal-close-full uk-close-large': full
        }"
        type="button"
        uk-close
      ></button>
      <div class="uk-modal-header">
        <slot name="header"></slot>
      </div>
      <div class="uk-modal-body" uk-overflow-auto>
        <slot name="body"></slot>
      </div>
      <div class="uk-modal-footer uk-text-center uk-padding">
        <slot name="footer">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Fermer
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    closeButton: { type: Boolean, default: true },
    center: { type: Boolean, default: false },
    container: { type: Boolean, default: false },
    bgClose: { type: Boolean, default: true },
    full: { type: Boolean, default: false }
  }
}
</script>
