import { createStore } from 'vuex'
import user from './modules/user'
import music from './modules/music'
import playlist from './modules/playlist'
export default createStore(
  {
    modules: {
      user,
      music,
      playlist
    }
  })
