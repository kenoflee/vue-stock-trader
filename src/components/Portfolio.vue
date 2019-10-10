<template>
    <div class="Component">
        <Stock
            v-for="stock in this.$store.state.portfolio"
            :key="stock.name" type="sell"
            :name="stock.name"
            :price="stock.price"/>
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

</style>