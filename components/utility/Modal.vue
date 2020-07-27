<template>
  <div
    v-if="bgClose === true"
    :class="{ 'uk-flex-top ': center, 'uk-modal-container': container }"
    uk-modal
    bg-close="true"
  >
    <div class="uk-modal-dialog uk-light">
      <button
        v-show="closeButton"
        class="uk-modal-close-default"
        :class="{ 'uk-magin-auto-vertical': center }"
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
  <div
    v-else
    id="modal"
    :class="{ 'uk-flex-top ': center, 'uk-modal-container': container }"
    uk-modal
    bg-close="false"
  >
    <div class="uk-modal-dialog">
      <button
        v-show="closeButton"
        class="uk-modal-close-default"
        :class="{ 'uk-magin-auto-vertical': center }"
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
    bgClose: { type: Boolean, default: true }
  }
}
</script>
