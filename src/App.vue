<script setup lang="ts">
import ProductsTable from "products-table/ProductsTable";
import CustomNavbar from "./components/CustomNavbar.vue";

</script>

<template>
  <CustomNavbar/>
<!--  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>-->
  <div class="container">
    <RouterView/>
<!--    <ProductsTable/>-->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
