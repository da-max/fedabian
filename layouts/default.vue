<template>
  <div>
    <navbar />
    <nuxt />
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
