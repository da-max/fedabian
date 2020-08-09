<template>
  <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['error'],

  mounted() {
    if (this.error.statusCode === 404) {
      this.add404()
    } else if (this.error.statusCode === 400) {
      this.add400()
    } else if (this.error.statusCode === 500) {
      this.add500()
    } else if (this.error.statusCode === 503) {
      this.add503()
    } else {
      this.addUnknown()
    }
  },

  methods: {
    ...mapMutations({
      add404: 'alerts/ADD_404',
      add400: 'alerts/ADD_400',
      add500: 'alerts/ADD_500',
      add503: 'alerts/ADD_503',
      addUnknown: 'alerts/ADD_UNKNOWN'
    })
  }
}
</script>
