<template>
    <main>
        <div class="flex flex-wrap">
            <div v-for="a in areas" class="lg:basis-72 sm:basis-52 basis-32 justify-center ml-auto mr-auto mb-5">
                <div>
                    <NuxtLink id="about area" :to='"/areas/" + a.code'>
                    <ImageCard v-if="a.code === 'SPACE_MINING'" :img_link="a.thumb_url" :alt="a.name" :color="'#BB86FC'" />
                    <ImageCard v-if="a.code === 'SPACE_TOURISM'" :img_link="a.thumb_url" :alt="a.name" :color="'#F65933'" />
                    <ImageCard v-if="a.code === 'SATELLITES'" :img_link="a.thumb_url" :alt="a.name" :color="'#7DD2F4'" />
                    </NuxtLink>
                </div>
                <p class="mt-0 pt-0 font-bold">{{ a.name.toUpperCase() }}</p>
                <NuxtLink id="about area" :to='"/areas/" + a.code'>
                    <i class="fa-solid fa-arrow-right text-3xl;"></i>
                </NuxtLink>
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