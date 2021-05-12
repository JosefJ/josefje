import Vue from 'vue'
import Vuex from 'vuex'

import build from './modules/build.js'
import research from './modules/research'
import organize from './modules/organize'
import support from './modules/support'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    build,
    research,
    organize,
    support
  },
  strict: DEBUG
})
