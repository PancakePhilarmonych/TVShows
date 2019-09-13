import Vue from 'vue'
import Vuex from 'vuex'
import show from './modules/show'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    show
  },
  state: {
    request_text: '',
    api: 'http://api.tvmaze.com/search/'
  },
  getters: {
    request_text (state) {
      return state.request_text
    }
  },
  mutations: {
    UPDATE_REQUEST (state, payload) {
      state.request_text = payload
    }
  },
  actions: {
    setRequest ({ commit }, payload) {
      commit('UPDATE_REQUEST', payload)
    }
  }
})
