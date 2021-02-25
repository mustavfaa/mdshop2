import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        backendUrl: "http://127.0.0.1:8000/api/v1",
        allsearch:'',
        cart:[]
    },

    mutations: {
        SET_SEARCH_VALUE_TO_VUEX: (state,value) => {
            state.allsearch =value;

        }
    },
    actions: {
        GET_SEARCH_VALUE_TO_VUEX({commit},value){
            commit('SET_SEARCH_VALUE_TO_VUEX',value)
        }

    },
    modules: {},
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        },
        SEARCH_VALUE: state => {
            return state.allsearch
        },
        CART(state){
            return state.cart
        }
    }
})

export default store
