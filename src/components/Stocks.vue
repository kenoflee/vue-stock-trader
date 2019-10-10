<template>
    <div class="Component">
        <Stock
            v-for="(price, name) in this.$store.state.stocks"
            :key="name" type="buy"
            :name="name"
            :price="price"
            />
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components: {
        Stock,
    },
}
</script>

<style>
    .Component {
        display: flex;
    }
</style>