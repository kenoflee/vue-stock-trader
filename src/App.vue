<template>
  <div id="app" class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
