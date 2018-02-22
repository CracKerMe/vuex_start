<template>
  <div>
    <h1>经过处理 的 item</h1>
    <ul>
      <li v-for="product in saleProduct" :key='product.name'>
        <span class="name">{{ product.name }}</span>
        <span class="price">$ {{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      products () {
        return this.$store.state.products
      },
      saleProduct () {
        return this.$store.getters.saleProduct
      }
    }
  }
</script>

<style scoped>

</style>
