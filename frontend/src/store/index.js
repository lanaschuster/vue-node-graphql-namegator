import { createStore } from 'vuex'


export default createStore({
  state() {
    return {
      prefixes: [],
      sufixes: []
    }
  },
  mutations: {
    addSufix(state, payload) {
      state.sufixes.push(payload)
    },
    addPrefix(state, payload) {
      state.prefixes.push(payload)
    }
  }
})