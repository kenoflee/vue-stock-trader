<template>
    <b-card :border-variant="(type === 'buy') ? 'success' : 'secondary'" :header="name + ' - $' + price" align="left">
        <b-form-input :min="0" v-model="quantity" type="number" placeholder="Quantity"></b-form-input>
        <b-button @click="buy({name, quantity, price})" v-if="type=== 'buy'" variant="outline-success">Buy</b-button>
        <b-button @click="sell({name, quantity, price})" v-else variant="outline-danger">Sell</b-button>
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
    methods: {

        ...mapActions([
            'buy',
            'sell',
        ]),
    },
    data() {
        return {
            quantity: 0,
        }
    },
}
</script>

<style lang="scss">
    .card-body {
        display: flex;
    }
</style>