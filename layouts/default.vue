<template>
  <div>
    <navbar />
    <alerts></alerts>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/partials/Navbar'
import Footer from '~/components/partials/Footer'
import Alerts from '~/components/utility/Alerts'

export default {
  components: {
    Navbar,
    Footer,
    Alerts
  }
}
</script>
