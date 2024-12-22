<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <img :src="product.image" class="card-img-top" alt="Product Image" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">Цена: ${{ product.price }}</p>
        <p class="card-text">Категория: {{ product.category }}</p>
        <p class="card-text">Оценка: {{ product.rating.rate.toFixed(1) }}<span class="star">★</span> / 5<span class="star">★</span></p>
      </div>
      <div class="card-footer">
        <button @click="addToCart" class="btn btn-success">В корзину</button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...this.product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Товар добавлен в корзину");
    },
  },
};
</script>