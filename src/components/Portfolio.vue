<template>
    <!-- v-if="this.$store.state.portfolio.length > 0" -->
    <div class="Component">
        <Stock
            v-for="(quantity, name) in this.$store.state.portfolio"
            :key="name" type="sell"
            :name="name"
            :price="$store.state.stocks[name]"
            />
    </div>
    <!-- <p v-else>You have no stocks in your portfolio.</p> -->
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