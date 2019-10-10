<template>
  <div id="app" class="container">
    <Header />
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
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
}

.card {
  width: 25%;
}

.slide-enter {
  opacity: 0;
  /*
    slide-in refers to the keyframes 'slide-in'
    ease-out: start fast end slow
    forwards: animation ends at finishing position
  */
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {

}

// .slide-leave-active {
//   animation: slide-out 1s ease-out forwards;
//   transition: opacity 1s;
//   opacity: 0;
//   /* stops the snapping of the animation when slide-leave happens */
//   position: absolute;
// }

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
      transform: translateY(-20px);
  }
  to {
      transform: translateY(0);
  }
}

// @keyframes slide-out {
//   from {
//       transform: translateY(0);
//   }
//   to {
//       transform: translateY(20px);
//   }
// }
</style>
