<script setup lang="ts">

</script>

<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <RouterLink to="/">
          Home
        </RouterLink>
      </b-navbar-item>
      <b-navbar-item>
        <RouterLink to="/about">
          Products
        </RouterLink>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
b-navbar {
  width: 100%;
}
</style>