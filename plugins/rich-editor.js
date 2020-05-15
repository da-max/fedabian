// Source https://github.com/ckeditor/ckeditor5-vue/issues/71
import Vue from 'vue'
import RichEditor from '@/components/utility/RichEditor'

// register component from plugin to bypass SSR
Vue.component('rich-editor', RichEditor)
