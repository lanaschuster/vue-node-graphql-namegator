import { createStore } from 'vuex'


export default createStore({
  state() {
    return {
      prefixes: [],
      sufixes: []
    }
  },
  getters: {
    domains(state) {
      let domains = []
      
      state.prefixes.forEach(prefix => {
        state.sufixes.forEach(sufix => {
          domains.push(prefix +''+ sufix)
        })
      })

      return domains
    }
  },
  mutations: {
    addSufix(state, payload) {
      state.sufixes.push(payload)
    },
    addPrefix(state, payload) {
      state.prefixes.push(payload)
    },
    removePrefix(state, payload) {
      state.prefixes.splice(payload, 1)
    },
    removeSufix(state, payload) {
      state.sufixes.splice(payload, 1)
    }
  }
})