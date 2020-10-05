import { createStore } from 'vuex'


export default createStore({
  state() {
    return {
      prefixes: [],
      sufixes: [],
      domains: []
    }
  },
  actions: {
    generateDomains({ commit }) {
      commit('cleanDomains')
      
      this.state.prefixes.forEach(prefix => {
        this.state.sufixes.forEach(sufix => {
          commit('addDomain', prefix +''+ sufix)
        })
      })
    }
  },
  mutations: {
    addSufix(state, payload) {
      state.sufixes.push(payload)
    },
    addPrefix(state, payload) {
      state.prefixes.push(payload)
    },
    addDomain(state, payload) {
      state.domains.push(payload)
    },
    cleanDomains(state) {
      state.domains = []
    }
  }
})