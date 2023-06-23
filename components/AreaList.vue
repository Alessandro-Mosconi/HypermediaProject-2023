<template>
    <main>
        <div class="text-[white]">
        <div v-for="a in areas" class="inline-table ml-5 mt-5">
            <ImageCard :img_link="a.img_url" :alt="a.name" :color="a.color" />
            <p class="mt-0 pt-0">{{ a.name }}</p>
            <NuxtLink id="about" class="pg" :to='"/areas/" + a.code'><i class="fa-solid fa-arrow-right text-3xl;"></i></NuxtLink>
        </div>
    </div>
    </main>
</template>

<script>
export default {
    props: [
        'areas'
    ]
}
</script>