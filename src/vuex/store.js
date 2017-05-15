import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageInfo: {
      phone: '15210881566',
      deviceId: '8080',
      name: 'Kwin',
      login: false
    }
  },
  mutations: {
    login(state, deviceId) {
      state.pageInfo.login = true
      state.pageInfo.deviceId = deviceId
    }
  }
})
