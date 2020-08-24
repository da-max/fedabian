<template>
  <div>
    <navbar />
    <alerts></alerts>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Partials/Navbar'
import Footer from '~/components/Partials/Footer'
import Alerts from '~/components/Utils/Alerts'

export default {
  components: {
    Navbar,
    Footer,
    Alerts
  }
}
</script>
