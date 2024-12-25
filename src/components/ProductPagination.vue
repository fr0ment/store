<template>
    <nav>
      <div class="pagination">
        <div  class="page-item"
          :class="{ disabled: currentPage === 1 }"
          @click="changePage(currentPage - 1)"
        >
          <a class="page-link">Предыдущая</a>
        </div>
        <div class="page-item"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          <a class="page-link">{{ page }}</a>
        </div>
        <div class="page-item"
          :class="{ disabled: currentPage === totalPages }"
          @click="changePage(currentPage + 1)"
        >
          <a class="page-link">Следующая</a>
        </div>
      </div>
    </nav>
  </template>
  <script>
  export default {
    props: {
      totalItems: Number,
      itemsPerPage: Number,
    },
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
    },
    methods: {
      changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.$emit("page-change", page);
      },
    },
  };
  </script>
  