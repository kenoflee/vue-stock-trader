import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        wallet: 10000,
        portfolio: [],
        stocks: [
            {
                name: 'Google',
                price: 500,
            },
            {
                name: 'Tesla',
                price: 200,
            },
            {
                name: 'Facebook',
                price: 250,
            },
            {
                name: 'Uber',
                price: 100,
            }
        ],
    },
    getters: {

    },
    setters: {

    },
});