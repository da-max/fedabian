<template>
  <div>
    <div
      v-for="alert in $store.state.alerts.alerts"
      :key="alert.id"
      class="uk-margin-medium-top"
    >
      <alert
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
