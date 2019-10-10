<template>
    <b-card :border-variant="(type === 'buy') ? 'success' : 'secondary'" :header="name + ' - $' + price" align="left">
        <b-form-input :min="0" v-model="quantity" type="number" placeholder="Quantity"></b-form-input>
        <b-button @click="buy" v-if="type=== 'buy'" variant="outline-success">Buy</b-button>
        <b-button @click="sell" v-else variant="outline-danger">Sell</b-button>
    </b-card>
</template>

<script>
export default {
    props: {
        type: String,
        price: Number,
        name: String,
    },
    methods: {
        buy() {
            //this.$store.state.portfolio
            console.log('buy');
        },
        sell() {
            //this.$store.state.portfolio
            console.log('sell');
        }
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