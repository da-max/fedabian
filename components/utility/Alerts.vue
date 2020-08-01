<template>
  <div class="uk-width-2-5@l uk-width-2-3@m uk-margin-auto">
    <div
      v-for="alert in $store.state.alerts.alerts"
      :key="alert.id"
      class="uk-margin-medium-top"
    >
      <alert
        :alert-id="alert.id"
        :close="alert.close || null"
        :header="alert.header || false"
        :status="alert.status || null"
      >
        <template #header>
          {{ alert.headerContent }}
        </template>
        <template #body>
          {{ alert.body }}
        </template>
      </alert>
    </div>
  </div>
</template>

<script>
import Alert from '~/components/utility/Alert'
export default {
  name: 'Alerts',

  components: {
    Alert
  }
}
</script>
