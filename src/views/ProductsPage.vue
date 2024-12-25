<template>
  <div>
    <ProductFilter :categories="categories" @filter="filterCategory" />
    <div class="row">
      <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          :exchange-rate="exchangeRate"
          @add-to-cart="addToCart"/>
    </div>
    <ProductPagination
        :total-items="filteredProducts.length"
        :items-per-page="10"
        @page-change="changePage"/>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductPagination from "@/components/ProductPagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import axios from "axios";

export default {
  components: { ProductCard,  ProductPagination, ProductFilter },
  data() {
    return {
      products: [],
      filteredProducts: [],
      categories: [],
      currentPage: 1,
      exchangeRate: 75, // значение рубля по умолчанию, 75 рублей за долар
    };
  },

  methods: {
    async fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        this.products = await res.json();
        this.filteredProducts = this.products;
      } catch (error) {
        console.error("Failed to fetch products:", error);
        this.filteredProducts = this.products;
      }
    },
    async fetchCategories() {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        this.categories = await res.json();
      },
      async fetchExchangeRate() {
      try {
        const res = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");// API курсов валют 
        this.exchangeRate = res.data.Valute.USD.Value;
      } catch (error) {
        console.error("Ошибка получения курса валют:", error);
      }
    },
      filterCategory(category) {
        this.filteredProducts = category
          ? this.products.filter((p) => p.category === category)
          : this.products;
        this.currentPage = 1;
      },
      changePage(page) {
        this.currentPage = page;
      },
      selectProduct(product) {
        this.$router.push(`/products/${product.id}`);
      },
    },
    created() {
      this.fetchProducts();
      this.fetchCategories();
      this.fetchExchangeRate();
    },
  computed: {
      paginatedProducts() {
        const start = (this.currentPage - 1) * 10;
        return this.filteredProducts.slice(start, start + 10);
      },
    },
  };
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
