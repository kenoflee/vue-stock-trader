<template>
    <div class="Component" >
        <Stock
            v-for="(quantity, name) in this.portfolio"
            :key="name" type="sell"
            :name="name"
            :price="$store.state.stocks[name]"
            />
    </div>
    <!-- <p v-else>You have no stocks in your portfolio.</p> -->
</template>

<script>
import Stock from './Stock.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            portfolio: this.$store.getters.portfolio,
        }
    },
    components: {
        Stock,
    }
}
</script>

<style>

</style>