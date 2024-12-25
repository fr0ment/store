<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 product-card" @click="openModal">
      <img :src="product.image" class="card-img-top product-image" alt="Product Image" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">Цена: {{ (product.price * exchangeRate).toFixed(2) }} ₽</p>
        <p class="card-text">Категория: {{ product.category }}</p>
        <p class="card-text">Оценка: {{ product.rating.rate.toFixed(1) }}
          <span class="star">★</span> / 5 ({{ product.rating.count }} оценок)
        </p>
      </div>
      <div class="card-footer">
        <button @click.stop="addToCart" class="btn btn-success">В корзину</button>
      </div>
    </div>
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content container" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-header">
          <h4>{{ product.title }}</h4>
        </div>
        <div class="modal-body">
          <img :src="product.image" alt="Product Image" class="modal-image" />
          <div class="modal-description">
            <p>Описание: {{ product.description }}</p>
            <p>Оценка: {{ product.rating.rate }}<span class="star">★</span> (Всего оценок: {{ product.rating.count }})</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
  product: Object,
  exchangeRate: Number, // передаем курс валют
},

  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    addToCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...this.product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Товар добавлен в корзину");
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};

</script>
