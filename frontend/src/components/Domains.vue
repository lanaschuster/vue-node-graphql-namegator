<template>
  <ContentTable :title="title" :quantity="domains.length" :items="domains" />
</template>
<script>
import ContentTable from './ContentTable'

export default {
  name: 'Domains',
  components: {
    ContentTable
  },
  created() {
    this.$store.dispatch('generateDomains')
  },
  data() {
    return {
      title: 'Domínios'
    }
  },
  computed: {
    domains() {
      return this.$store.state.domains
    }
  }
}
</script>
