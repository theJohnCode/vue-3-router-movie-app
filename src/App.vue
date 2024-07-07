<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <NavBar />
    <LoadingSpinner />

    <RouterView />
  </div>
</template>
