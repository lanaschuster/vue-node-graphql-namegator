<template>
  <ContentTable
    hasPurchaseButton
    :title="title" 
    :quantity="domains.length" 
    :items="domains"
    @buy-item="purchaseDomain" />
</template>
<script>
import ContentTable from './ContentTable'

export default {
  name: 'Domains',
  components: {
    ContentTable
  },
  data() {
    return {
      title: 'Domínios'
    }
  },
  methods: {
    purchaseDomain(index) {
      const domain = this.domains[index]
      window.open(domain.checkout, '_blank')
    }
  },
  computed: {
    domains() {
      return this.$store.getters.domains
    }
  }
}
</script>
