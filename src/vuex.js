import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    users: null
}

const store = new Vuex.Store({
    state, 
    getters: {
        user: (state) => {
            return state.users;
        }
    },
    actions: {
        users(context, users){
            contxte.commit('users', users);
        }
    },
    mutations: {
        users(state, users){
            state.users = users;
        }
    }
});

export default store ;