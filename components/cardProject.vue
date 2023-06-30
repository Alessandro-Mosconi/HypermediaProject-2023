<template>
    <NuxtLink id="about" :to="'/projects/' + projectId">
        <div class="project-card">
            <div class="relative h-60">
                <div class="h-full w-full">
                    <button class="absolute top-2 right-2 bg-transparent">
                        <i class="fa-solid fa-arrow-right text-xl"></i>
                    </button>
                    <img :src="img" alt="" class="h-full w-full object-cover"/>
                </div>
            </div>
            <NuxtLink :to="'/projects/' + projectId"><h1 class="text-xl font-bold mt-4">{{ projectName }}</h1>
            </NuxtLink>
            <NuxtLink :to="'/areas/' + area">
            <h3 v-if="area === 'SPACE_MINING'" class="text-sm text-[#F65933]">SPACE MINING</h3>
            <h3 v-if="area === 'SPACE_TOURISM'" class="text-sm text-[#7DD2F4]">SPACE TOURISM </h3>
            <h3 v-if="area === 'SATELLITES'" class="text-sm text-[#BB86FC]">SATELLITES</h3>
            </NuxtLink>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        projectName: String,
        projectId: String,
        area: String,
        img: String,
    }
}
</script>

<style scoped>
.project-card {
    height: 400px;
    width: 400px;
}
</style>