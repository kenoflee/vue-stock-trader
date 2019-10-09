<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Stock Trader</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Portfolio</b-nav-item>
            <b-nav-item href="#">Stocks</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">End Day</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>

</template>

<script>
export default {

}
</script>

<style>

</style>