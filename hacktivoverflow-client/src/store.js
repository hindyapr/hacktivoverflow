import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logStatus: false,
        questionList: [],
        token: '',
        userId: '',
    },
    mutations: {
        addQuestion(state, question) {
            state.questionList.push(question);
        },
        logedIn(state, data) {
            state.logStatus = true;
            state.token = data.token;
            state.userId = data.userId;
        },
        getQuestions(state, questions) {
            state.questionList = questions;
        }
    },
    actions: {

    },
});