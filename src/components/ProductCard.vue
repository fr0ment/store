<template>
    <div class="col-md-4 mb-4">
      <div >
        <img :src="product.image" class="card-img-top" alt="Product Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
  };
  </script>