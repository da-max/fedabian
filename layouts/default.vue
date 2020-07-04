<template>
  <div>
    <navbar />
    <nuxt uk-height-viewport="offset-top: true; offset-bottom: true" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/partials/Navbar'
import Footer from '~/components/partials/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
