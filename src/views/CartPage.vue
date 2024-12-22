<template>
    <div>
      <h3>Корзина</h3>
      <div v-if="cart.length" class="row">
        <div v-for="item in cart" :key="item.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <img :src="item.image" class="card-img-top" alt="Product Image" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">Цена: ${{ item.price }}</p>
              <p class="card-text">Количество: {{ item.quantity }}</p>
              <button @click="removeFromCart(item)" class="btn btn-danger">Удалить</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Корзина пуста</p>
      </div>
      <div class="mt-4">
        <h4>Общая стоимость: ${{ totalCost.toFixed(2) }}</h4>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [],
      };
    },
    computed: {
      totalCost() {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
    },
    methods: {
      loadCart() {
        this.cart = JSON.parse(localStorage.getItem("cart")) || [];
      },
      removeFromCart(itemToRemove) {
        this.cart = this.cart.filter((item) => item.id !== itemToRemove.id);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
    },
    created() {
      this.loadCart();
    },
  };
  </script>
  