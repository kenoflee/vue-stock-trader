<template>
    <b-card :border-variant="(type === 'buy') ? 'success' : 'secondary'" :header="name + ' - $' + price" align="left">
        <div class="input-group">
            <b-form-input v-if="type=== 'buy'" :min="0" v-model="quantity" type="number" placeholder="Quantity"></b-form-input>
            <b-form-input v-else :min="0" :max="$store.state.portfolio[name]" v-model="quantity" type="number" placeholder="Quantity"></b-form-input>

            <b-button @click="buy({name, quantity, price})" v-if="type=== 'buy'" variant="outline-success">Buy</b-button>
            <b-button @click="sell({name, quantity, price})" v-else variant="outline-danger">Sell</b-button>
        </div>

        <span v-if="render" class="quantity">quantity: {{$store.state.portfolio[name]}}</span>
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
            return (this.type === 'sell' && this.$store.state.portfolio[this.name] > 0) ? true : false;
        },
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
        .input-group {
            display: flex;
        }

        .quantity {
            font-size: small;
        }
    }
</style>