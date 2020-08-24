<template>
  <a
    v-show="scrolled"
    href="#"
    title="Remonter en haut de la page."
    type="button"
    uk-scroll
    class="uk-icon-link"
    :uk-icon="`icon: chevron-up; ratio: ${ratio}`"
  ></a>
</template>

<script>
export default {
  name: 'Totop',
  props: {
    ratio: {
      default() {
        return 2.5
      },
      type: Number,
      required: false
    }
  },
  data() {
    return {
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0
    }
  }
}
</script>
