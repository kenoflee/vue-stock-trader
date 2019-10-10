<template>
    <div class="Component" v-if="this.$store.state.portfolio.length > 0">
        <Stock
            v-for="stock in this.$store.state.portfolio"
            :key="stock.name" type="sell"
            :name="stock.name"
            :price="stock.price"/>
    </div>
    <p v-else>You have no stocks in your portfolio.</p>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components: {
        Stock,
    }
}
</script>

<style>

</style>