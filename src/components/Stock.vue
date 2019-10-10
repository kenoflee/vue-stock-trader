<template>
    <b-card :border-variant="(type === 'buy') ? 'success' : 'secondary'" :header="name + ' - $' + price" align="left">
        <div class="input-group">
            <b-form-input :min="0" v-model="quantityToBuy" type="number" placeholder="Quantity"></b-form-input>
            <b-button @click="buy({name, quantityToBuy, price})" v-if="type=== 'buy'" variant="outline-success">Buy</b-button>
            <b-button @click="sell({name, quantityToBuy, price})" v-else variant="outline-danger">Sell</b-button>
        </div>

        <span v-if="$store.state.portfolio[name] > 0" class="quantity">quantity: {{$store.state.portfolio[name]}}</span>
    </b-card>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    props: {
        type: String,
        price: Number,
        name: String,
    },
    computed: {
        render() {
            return (type === 'sell' && quantity === 0) ? false : true;
        }
    },
    methods: {

        ...mapActions([
            'buy',
            'sell',
        ]),
    },
    data() {
        return {
            quantityToBuy: 0,
        }
    },
}
</script>

<style lang="scss">
    .card-body {
        .input-group {
            display: flex;
        }

        .quantity {
            font-size: small;
        }
    }
</style>