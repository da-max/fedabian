<template>
  <div>
    <label v-show="displayLabel" :for="inputName">
      <slot />
    </label>
    <div>
      <textarea
        :name="inputName"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormTextarea extends Vue {
  name:string = 'Textarea.vue'
  @Prop({ required: false, default: '' }) readonly value: string|number|undefined
  @Prop({ required: true }) readonly inputName!: string
  @Prop({ required: false }) readonly placeholder: string|undefined
  @Prop({ required: false, default: true }) readonly displayLabel: boolean|undefined
  @Prop({ required: false, default: true }) readonly required: boolean|undefined
}
</script>
