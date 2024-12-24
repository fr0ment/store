<template>
    <div class="mb-4">
      <select class="form-select" @change="filter" v-model="selectedCategory">
        <option value="">Все категории</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categories: Array,
    },
    data() {
      return {
        selectedCategory: "",
      };
    },
    methods: {
      filter() {
        this.$emit("filter", this.selectedCategory);
      },
    },
  };
  </script>