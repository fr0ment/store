<template>
  <div>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  data() {
    return {
      products: []
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        this.products = await res.json();
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  },
  created() {
    this.fetchProducts();
  }
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
