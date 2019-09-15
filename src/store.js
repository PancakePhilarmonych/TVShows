import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import card from './assets/no-photo.jpg'

Vue.use(Vuex)

class Show {
  constructor (name = 'film', lang = 'eng', genres = 'all', status = 'Неизвестен', link = 'link', rating = 'rating', descr = 'descr', img = 'img', id) {
    this.name = name
    this.lang = lang
    this.genres = genres
    this.status = status
    this.link = link
    this.rating = rating
    this.descr = descr
    this.img = img
    this.id = id
  }
}

export default new Vuex.Store({
  state: {
    request_text: '',
    api: 'https://api.tvmaze.com/search/',
    data: []
  },
  getters: {
    request_text (state) {
      return state.request_text
    },
    data (state) {
      return state.data
    },
    serialById (state) {
      return id => {
        return state.data.find(i => i.id == id)
      }
    }
  },
  mutations: {
    GET_DATA (state, payload) {
      state.data = payload
      console.log(payload)
    },
    UPDATE_REQUEST (state, payload) {
      state.request_text = payload
    }
  },
  actions: {
    setRequest ({ commit }, payload) {
      commit('UPDATE_REQUEST', payload)
    },
    async getData ({ commit }, payload) {
      axios
        .get(this.state.api + 'shows?q=' + payload)
        .then((response) => {
          let allData = []
          let data = response.data
          data.forEach((item) => {
            let t = item.show
            let img = ''
            if (t.image !== null) {
              img = t.image.medium
            } else {
              img = card
            }
            let status = ''
            switch (t.status) {
              case 'Ended':
                status = 'Закончен'
                break
              case 'Running':
                status = 'Идет'
                break
              default:
                status = 'Неизвестно'
            }
            console.log(t.status)
            let update = new Show(t.name, t.language, t.genres, status, t.officialSite, t.rating.average, t.summary, img, t.id)
            allData.push(update)
          })
          console.log(allData)
          commit('GET_DATA', allData)
        })
        .catch(error => console.log(error))
    }
  }
})
