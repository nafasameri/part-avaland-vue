import { createStore } from 'vuex'
import user from './modules/user'
import music from './modules/music'

export default createStore(
  {
    modules: {
      user,
      music
    }
  })
