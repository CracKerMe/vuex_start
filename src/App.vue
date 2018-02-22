<template>
  <div id="app">
    <product-one></product-one>
    <product-two></product-two>
  </div>
</template>

<script>
import productOne from './components/product1.vue'
import productTwo from './components/product2.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    productOne,
    productTwo
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
}
</style>
