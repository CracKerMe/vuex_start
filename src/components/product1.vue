<template>
  <div>
    <h1>源数据item</h1>
    <ul>
      <li v-for="product in products" :key='product.name'>
        <span class="name">{{ product.name }}</span>
        <span class="price">$ {{ product.price }}</span>
      </li>
      <button @click="reducePrice(10)">优惠$10</button>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
  export default {
    computed: {
      products () {
        return this.$store.state.products
      },
      ...mapGetters([
        'saleProduct'
      ])
    },
    methods: {
      ...mapActions(['reducePrice'])
    }
  }
</script>

<style scoped>

</style>
