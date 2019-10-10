import Vue from 'vue';
import Vuex from 'vuex';
import {getNewStockPrice} from '../util/util';

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
    mutations: {
        end: state => {
            for(let i = 0; i < state.stocks.length; i++) {
                state.stocks[i].price = getNewStockPrice(state.stocks[i].price);
            }
        }
    },
});