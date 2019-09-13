import store from '../store'

export default function (to, from, next) {
  if (store.getters.data.length === 0) {
    next('/search')
  } else {
    next()
  }
}
