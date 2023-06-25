<template>
    <main>
        <div class="flex flex-wrap">
            <div v-for="a in areas"
                 class="lg:basis-72 sm:basis-52 basis-32 justify-center ml-auto mr-auto mb-5">
                <NuxtLink id="about area" :to='"/areas/" + a.code'>
                    <ImageCard class="bg-[green]" v-if="a.code === 'SPACE_MINING'" :img_link="a.thumb_url" :alt="a.name"
                               :color="'#F65933'"/>
                    <ImageCard v-if="a.code === 'SPACE_TOURISM'" :img_link="a.thumb_url" :alt="a.name" :color="'#7DD2F4'"/>
                    <ImageCard v-if="a.code === 'SATELLITES'" :img_link="a.thumb_url" :alt="a.name" :color="'#BB86FC'"/>
                </NuxtLink>
                <p class="mt-0 pt-0 font-medium mb-[15%] md:mt-[5%] text-base md:text-3xl lg:text-5xl mt-[25%]">{{ a.name.toUpperCase() }}</p>
                <NuxtLink id="about area" :to='"/areas/" + a.code'>
                    <i v-if="a.code === 'SPACE_MINING'" class="fa-solid fa-arrow-right text-3xl text-[#F65933]"></i>
                    <i v-if="a.code === 'SPACE_TOURISM'" class="fa-solid fa-arrow-right text-3xl text-[#7DD2F4]"></i>
                    <i v-if="a.code === 'SATELLITES'" class="fa-solid fa-arrow-right text-3xl text-[#BB86FC]"></i>
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