import Vue from 'vue'
import Vuex from 'vuex'

import Api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    types: [],
    categories: []
  },
  mutations: {
    SET_TYPES (state, types) {
      state.types = types
    },
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async loadTypes ({ commit }) {
      const response = await Api().get('/api/types')
      const types = response.data
      commit('SET_TYPES', types)
    },
    async loadCategories ({ commit }) {
      const response = await Api().get('/api/categories')
      const categories = response.data
      commit('SET_CATEGORIES', categories)
    }
  },
  modules: {
  }
})
