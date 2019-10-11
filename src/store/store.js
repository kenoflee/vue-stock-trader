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
            return state.wallet;
        },
        portfolio: state => {
            return state.portfolio;
        }

    },
    /*
     * note: mutations must be synchronous. setTimeout will not work
     * Action is where you should run async tasks
     */
    mutations: {
        end: state => {
            if(state.wallet >= 0) {
                for(const name in state.stocks) {
                    state.stocks[name] = getNewStockPrice(state.stocks[name]);
                }
            }
        },
        update: (state, payload) => {
            //update the quantity of portfolio
            if(!(payload.name in state.portfolio)) {
                state.portfolio[payload.name] = parseInt(payload.quantity);
            } else {
                state.portfolio[payload.name] += parseInt(payload.quantity);
            }

            if(state.portfolio[payload.name] === 0) {
                delete state.portfolio[payload.name];
            }

            //then update the wallet
            state.wallet += payload.net;

            console.log(state.portfolio);
        },
    },
    actions: {
        buy: (context, payload) => {
            payload.net = -1 * +payload.quantity * payload.price;
            context.commit('update', payload);
        },
        sell: (context, payload) => {
            payload.net = +payload.quantity * payload.price;
            payload.quantity *= -1;
            context.commit('update', payload);
        },
    },
});