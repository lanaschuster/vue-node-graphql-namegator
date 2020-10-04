<template>
  <ContentTable title="Domínios" quantity="2" :items="['zxc', 'dfg']" />
</template>
<script>
import ContentTable from './ContentTable'

export default {
  name: 'Domains',
  components: {
    ContentTable
  }
}
</script>
