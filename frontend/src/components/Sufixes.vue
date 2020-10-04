<template>
  <ContentTable title="Sufixos" quantity="2" :items="['qwe', 'asd']">
    <template v-slot:fields>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input type="text" class="input" placeholder="e aqui os sufixos.">
        </div>
        <div class="control">
          <button class="button is-info"><span class="icon"><i class="fa fa-plus fa-xs"></i></span></button>
        </div>
      </div>
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
