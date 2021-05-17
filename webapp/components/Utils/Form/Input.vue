<template>
  <div>
    <label v-show="displayLabel" :for="inputName">
      <slot />
    </label>
    <div>
      <input
        :type="type"
        :name="inputName"
        :value="value"
        :placeholder="placeholder"
        :required="required"
        @input="$emit('input', $event.target.value)"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormInput extends Vue {
  name: string = 'Input.vue'
  @Prop({ required: false, default: 'text' }) readonly type: string
  @Prop({ required: false, default: '' }) readonly value: string|number
  @Prop({ required: true }) readonly inputName!: string
  @Prop({ required: false }) readonly placeholder: string|undefined
  @Prop({ required: false, default: true }) readonly displayLabel: boolean
  @Prop({ required: false, default: true }) readonly required: boolean
}
</script>
