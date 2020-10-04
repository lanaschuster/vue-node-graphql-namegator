<template>
  <div>
    <Header />
    <div class="columns is-multiline">
      <div class="column is-6">
        <Prefixes />
      </div>
      <div class="column is-6">
        <Sufixes />
      </div>
      <div class="column is-12">
        <Domains />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Prefixes from './components/Prefixes.vue'
import Sufixes from './components/Sufixes.vue'
import Domains from './components/Domains.vue'

export default {
  name: 'App',
  components: {
    Header,
    Prefixes,
    Sufixes,
    Domains
  }
}
</script>
<style scoped>
.columns {
  margin-right: 30px;
  margin-left: 30px;
}
</style>