<template>
    <div class=' mx-auto bg-white rounded-3xl shadow-xl'>
        <div class="grid rounded-3xl max-w-[270px] shadow-sm bg-slate-100  flex-col">
            <RouterLink :to="{name: 'MovieDetails', params: { id: movie.id }}">
                <img :src="movie.thumbnail"
                    width="275" height="100" class="rounded-t-3xl justify-center grid h-50 object-cover"
                    :alt="movie.title" />
            </RouterLink>

            <div class="group p-6 grid z-10">
                <RouterLink :to="{name: 'MovieDetails', params: { id: movie.id }}" class="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2">
                    {{ movie.title }}
                </RouterLink>
                <span class="text-slate-400 pt-2 font-semibold">

                    ({{ movie.year }})
                </span>
                <div class="h-28">
                    <span class="line-clamp-4 py-2 text-sm font-light leading-relaxed">
                        {{movie.extract}}
                    </span>
                </div>
                <div class=" grid-cols-2 flex group justify-between">
                  
                    <div class="flex flex-col items-end">
                        <div class="h-2" />
                        <span class="text-3xl  font-bold  gap-x-2 text-slate-300">
                            # {{ movie.id}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    movie: Object
});
</script>
