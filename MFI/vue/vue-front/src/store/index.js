import Vue from "vue"
import Vuex from "vuex"
import auth from './modules/auth'
import board from './modules/board'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth,board,user
    }
})