<template>
  <ContentTable title="Prefixos" quantity="2" :items="['zxc', 'dfg']">
    <template v-slot:fields>
      <input type="text" class="input" placeholder="Insira aqui os prefixos...">
    </template>
  </ContentTable>
</template>
<script>
import ContentTable from './ContentTable'

export default {
  name: 'Prefixes',
  components: {
    ContentTable
  }
}
</script>
