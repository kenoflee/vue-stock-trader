<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand><router-link to="/">Stock Trader</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item><router-link to="/portfolio">Portfolio</router-link></b-nav-item>
            <b-nav-item><router-link to="/stocks">Stocks</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="end">End Day</b-nav-item>
            <b-nav-item>${{this.$store.state.wallet}}</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>

</template>

<script>
import {mapMutations} from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'end'
        ]),
    },
}
</script>

<style lang="scss">
    nav {
        margin-bottom: 20px;
    }
</style>