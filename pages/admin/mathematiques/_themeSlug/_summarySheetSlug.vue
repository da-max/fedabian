<template>
  <div>
    {{ $route.params.summarySheetSlug }}
  </div>
</template>

<script>
export default {
  name: 'UpdateSummarySheet',
  middleware: ['auth']
}
</script>
