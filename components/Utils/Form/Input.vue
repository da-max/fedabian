<template>
  <div>
    <label :for="name" class="uk-form-label">{{ label }}</label>
    <div class="uk-form-controls">
      <input
        :type="type"
        :name="name"
        class="uk-input"
        :placeholder="label"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    name: {
      type: String,
      default: 'name',
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
