import Vue from 'vue';
import Vuex from 'vuex';
import {getNewStockPrice} from '../util/util';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        wallet: 10000,
        portfolio: {
            /*
            stockname: quantity
            */
        },
        stocks: {
            Google: 500,
            Tesla: 200,
            Facebook: 250,
            Uber: 100,
        },
    },
    getters: {
        updatedWallet: state => {
            // let totalExpense = 0;
            // for(const stock of state.stocks) {
            //     totalExpense += stock.price * stock.quantity;
            // }
            // return state.wallet;
            return state.wallet;
        },
    },
    /*
     * note: mutations must be synchronous. setTimeout will not work
     * Action is where you should run async tasks
     */
    mutations: {
        end: state => {
            if(state.wallet >= 0) {
                for(let i = 0; i < state.stocks.length; i++) {
                    state.stocks[i].price = getNewStockPrice(state.stocks[i].price);
                    state.stocks[i].quantity = 0;
                }
            }
        },
        update: (state, payload) => {
            //update the quantity of portfolio
            if(!(payload.name in state.portfolio)) {
                state.portfolio[payload.name] = parseInt(payload.quantityToBuy);
            } else {
                state.portfolio[payload.name] += parseInt(payload.quantityToBuy);
            }

            //then update the wallet
            state.wallet += payload.net;

            console.log(state.portfolio);
        },
    },
    actions: {
        buy: (context, payload) => {
            payload.net = -1 * +payload.quantityToBuy * payload.price;
            context.commit('update', payload);
        },
        sell: (context, payload) => {
            payload.net = +payload.quantityToBuy * payload.price;
            context.commit('update', payload);
        },
    },
});