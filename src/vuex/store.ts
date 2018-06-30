import { TASKS } from '@/vuex/types';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: ["1111","2222"]
    },
    getters: {
        tasks: function (state) {
            return state.tasks
        }
    },
    mutations: {
        [TASKS]: function (state, task) {
            state.tasks.push(task)
        }
    },
    actions: {
        addTask: function ({ commit}, task) {
            commit(TASKS, task)
        }
    }
})
