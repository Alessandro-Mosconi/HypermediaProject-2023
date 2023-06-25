<template>
    <main>
        <div  class="flex flex-wrap h-full">
            <div v-for="a in areas" class="lg:basis-72 sm:basis-44 basis-32 justify-center ml-auto mr-auto mb-5" >
                <div>
                    <NuxtLink id="about" class="pg" :to='"/team/"'>
                        <ImageCard class="lg:h-72 sm:h-44 h-32" :img_link="a.thumb_url" :alt="a.name"
                           :color="'#F65933'"/>
                    </NuxtLink>
                </div>
                <div class="">
                    <NuxtLink id="about" class="pg" :to='"/team/"'>
                        <i class="fa-solid fa-arrow-right text-sm sm:text-2xl "></i>
                    </NuxtLink>
                </div>
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