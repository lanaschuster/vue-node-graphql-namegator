<template>
  <ContentTable
    :title="title"
    :quantity="sufixes.length"
    :items="sufixes"
    hasDeleteButton
    @remove-item="removeSufix">
    <template v-slot:fields>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            type="text"
            class="input"
            v-model="sufix"
            @keyup.enter="addSufix(sufix)"
            placeholder="e aqui os sufixos.">
        </div>
        <div class="control">
          <button class="button is-info" @click="addSufix(sufix)">
            <span class="icon"><i class="fa fa-plus fa-xs"></i></span>
          </button>
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
  },
  data() {
    return {
      title: 'Sufixos',
      sufix: ''
    }
  },
  methods: {
    addSufix(sufix) {
      this.$store.commit('addSufix', sufix)
      this.$store.dispatch('generateDomains')
      this.sufix = ''
    },
    removeSufix(index) {
      this.$store.commit('removeSufix', index)
      this.$store.dispatch('generateDomains')
    }
  },
  computed: {
    sufixes() {
      return this.$store.state.sufixes
    }
  }
}
</script>
