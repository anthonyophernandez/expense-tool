import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    types: []
  },
  mutations: {
    SET_TYPES (state, types) {
      state.types = types
    }
  },
  actions: {
    async loadTypes ({ commit }) {
      const response = await Api().get('/api/types')
      const types = response.data
      commit('SET_TYPES', types)
    }
  },
  modules: {
  }
})
