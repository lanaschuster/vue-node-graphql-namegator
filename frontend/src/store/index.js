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
          const name = prefix +''+ sufix
          const domain = name.toLowerCase()
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${domain}&tld=.com`
          domains.push({
            name,
            checkout
          })
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