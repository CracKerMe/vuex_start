import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // strict: true,
  state: {
    products: [
      {name:'AppleSun',price:200},
      {name:'AppleJobs',price:100},
      {name:'StevenSun',price:56}
    ]
  },
  getters: {
    saleProduct: (state) => {
      var saleProducts = state.products.map( product => {
        return {
          name: `**${product.name}**`,
          price: product.price
        }
      })
      return saleProducts
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach( product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },20)
    }
  }
})

