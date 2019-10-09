<template>
    <Stock type="sell" name="Google" :price="500" />
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