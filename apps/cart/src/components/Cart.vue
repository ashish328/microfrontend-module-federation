<script setup lang="ts">
import { ref } from 'vue'

const cartProducts = ref([
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
])

</script>

<template>
  <h1>{{ cartProducts.length }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
