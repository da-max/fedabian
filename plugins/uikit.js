import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Vue from 'vue'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit
