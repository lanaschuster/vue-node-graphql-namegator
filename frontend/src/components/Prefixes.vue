<template>
  <ContentTable :title="title" :quantity="prefixes.length" :items="prefixes">
    <template v-slot:fields>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input 
            type="text" 
            class="input" 
            v-model="prefix"
            @keyup.enter="addPrefix(prefix)"
            placeholder="Insira aqui os prefixos...">
        </div>
        <div class="control">
          <button class="button is-info"
            @click="addPrefix(prefix)">
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
  name: 'Prefixes',
  components: {
    ContentTable
  },
  data() {
    return {
      title: 'Prefixos',
      prefix: ''
    }
  },
  methods: {
    addPrefix(prefix) {
      this.$store.commit('addPrefix', prefix)
      this.$store.dispatch('generateDomains')
      this.prefix = ''
    }
  },
  computed: {
    prefixes() {
      return this.$store.state.prefixes
    }
  }
}
</script>
