<template>
  <div>
    <label v-show="displayLabel" :for="inputName" class="btn btn-primary">
      <slot />
    </label>
    <input
      :id="inputName"
      type="file"
      :name="inputName"
      :value="value"
      :required="required"
      :accept="accept"
      @change="$emit('change', $event.target.files[0])"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class InputFile extends Vue {
  name: string = 'InputFile'
  @Prop({ required: true }) readonly inputName!: string
  @Prop({ required: false, default: true }) readonly displayLabel?: boolean
  @Prop({ required: false, default: true }) readonly required?: boolean
  @Prop({ required: false, default: null }) value?: File
  @Prop({ required: false, default: 'image/*' }) accept?: string
}
</script>

<style lang="scss" scoped>
input {
  @apply hidden;
}

label {
  @apply cursor-pointer;
}
</style>
