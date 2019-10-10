<template>
    <div class="Component">
        <Stock
            v-for="stock in this.$store.state.stocks"
            :key="stock.name" type="buy"
            :name="stock.name"
            :price="stock.price"
            />
    </div>
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
    .Component {
        display: flex;
    }
</style>