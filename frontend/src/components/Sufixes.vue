<template>
  <ContentTable title="Sufixos" quantity="2" :items="['qwe', 'asd']">
    <template v-slot:fields>
      <input type="text" class="input" placeholder="e aqui os sufixos.">
    </template>
  </ContentTable>
</template>
<script>
import ContentTable from './ContentTable'

export default {
  name: 'Sufixes',
  components: {
    ContentTable
  }
}
</script>
