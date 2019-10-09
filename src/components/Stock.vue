<template>
    <b-card :border-variant="(type === 'buy') ? 'success' : 'secondary'" :header="name + ' - $' + price" align="left">
        <b-form-input type="number" placeholder="Quantity"></b-form-input>
        <b-button v-if="type=== 'buy'" variant="outline-success">Add</b-button>
        <b-button v-else variant="outline-danger">Sell</b-button>
    </b-card>
</template>

<script>
export default {
    props: {
        type: String,
        price: Number,
        name: String,
    }
}
</script>

<style lang="scss">
    .card-body {
        display: flex;
    }
</style>