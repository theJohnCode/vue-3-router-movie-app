<template>
    <h1 class="font-bold text-xl text-center bg-slate-100 py-3">About Movie</h1>

    <NotFound v-if="error" redirect="movies"/>

    <div class="grid place-items-center font-mono mt-5" v-if="Object.keys(queryMovie).length > 0">

        <div class="bg-white rounded-md shadow-lg">
            <div class="md:flex px-4 leading-none ">
                <div class="flex-none ">
                    <img :src="queryMovie.thumbnail" :alt="queryMovie.title"
                        class="h-72 w-64 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300" />
                </div>

                <div class="flex-col text-gray-300 px-3">

                    <p class="pt-4 text-2xl font-bold">{{ queryMovie.title }} ({{ queryMovie.year }})</p>
                    <hr class="hr-text" data-content="">
                    <div class="text-md flex justify-between px-4 my-2">
                        <span class="font-bold">{{ queryMovie.genres?.join(', ') }}</span>
                        <span class="font-bold"></span>
                    </div>
                    <p class="hidden md:block px-4 my-4 text-sm text-left">{{ queryMovie.extract }} </p>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLoadingStore } from '../store';
import NotFound from '../views/NotFound.vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const loadingStore = useLoadingStore();
const queryMovie = ref({})
const error = ref(false)


onMounted(async () => {
    // Start the loading animation before fetching the movie data
    loadingStore.showLoading();

    try {
        const result = await fetch(`http://localhost:3001/movies/${props.id}`);

        if (!result.ok) {
            if (result.status === 404) {
                error.value = true;
                return;
            }
            throw new Error('Failed to fetch movie data');
        }
        queryMovie.value = await result.json();

    } catch (error) {
        console.error(error);
    } finally {
        loadingStore.hideLoading();
    }
});


</script>
