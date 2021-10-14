import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import storeModule from './store-module'

export default store(function () {
  const Store = createStore({
    modules: {storeModule},
    strict: process.env.DEBUGGING
  })

  return Store
})
