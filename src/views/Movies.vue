<template>
    <h1 class="font-bold text-xl text-center bg-slate-100 py-3">Movies</h1>
    <div class='grid grid-cols-3 gap-3 mt-5'>
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue';
import { useLoadingStore } from '../store';

const loadingStore = useLoadingStore();

const movies = ref([])

onMounted(async () => {

    loadingStore.showLoading();

    const result = await fetch(`http://localhost:3001/movies`);
    movies.value = await result.json();

    loadingStore.hideLoading();
})

</script>
