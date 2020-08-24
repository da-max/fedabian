<template>
  <!-- Source https://github.com/ckeditor/ckeditor5-vue/issues/71 -->
  <ckeditor
    :editor="editor"
    :value="value"
    :config="editorConfig"
    @input="(ev) => $emit('input', ev)"
  />
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'RichEditor',
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    value: {
      default() {
        return [String]
      },
      type: Array
    },
    options: {
      type: [Object],
      default: () => {}
    }
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: this.options
    }
  }
}
</script>
