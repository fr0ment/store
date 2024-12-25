<template>
  <div class="korzina">
    <h3>Корзина</h3>
    <div v-if="cart.length" class="row">
      <div v-for="item in cart" :key="item.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">Цена: {{ (item.price * exchangeRate).toFixed(2) }} ₽</p>
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
      <h4>Общая стоимость: ₽{{ (totalCost * exchangeRate).toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cart: [],
      exchangeRate: 75, // значение рубля по умолчанию, 75 рублей за доллар
    };
  },
  computed: {
    totalCost() {
      // Возвращает общую стоимость в долларах
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
    async fetchExchangeRate() {
      try {
        const res = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
        this.exchangeRate = res.data.Valute.USD.Value; // курс доллара
      } catch (error) {
        console.error("Ошибка загрузки курса валют:", error);
      }
    },
  },
  created() {
    this.loadCart();
    this.fetchExchangeRate(); // загрузка курса валют
  },
};
</script>
