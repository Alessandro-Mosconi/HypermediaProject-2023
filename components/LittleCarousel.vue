<template>
    <div class="flex flex-col items-center justify-center w-full">
        <div class="flex justify-between w-full">

            <NuxtLink :to="linkLeft">
                <div class="flex items-center hover:scale-110 transition-transform duration-300 ml-4 md:ml-12">
                    <i class="fa-solid fa-arrow-left text-2xl"></i>
                    <div class="relative h-12 m-3 md:h-24">
                        <div class="h-full w-full">
                            <img :src="imageLeft" alt="" class="h-full w-full object-cover"/>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="font-extralight leading-none mb-2">
                            {{ subtitleLeft }}
                        </div>
                        <div class="font-semibold leading-none">
                            {{ titleLeft }}
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink :to="linkRight">
                <div class="flex items-center text-right hover:scale-110 transition-transform duration-300 mr-4 md:mr-12">
                    <div class="flex flex-col items-end">
                        <div class="font-extralight leading-none mb-2">
                            {{ subtitleRight }}
                        </div>
                        <div class="font-semibold leading-none">
                            {{ titleRight }}
                        </div>
                    </div>
                    <div class="relative h-12 m-3 md:h-24">
                        <div class="h-full w-full">
                            <img :src="imageRight" alt="" class="h-full w-full object-cover"/>
                        </div>
                    </div>
                    <NuxtLink><i class="fa-solid fa-arrow-right text-2xl"></i></NuxtLink>
                </div>

            </NuxtLink>
        </div>
        <div class="content">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageLeft: String,
        imageRight: String,
        titleLeft: String,
        titleRight: String,
        subtitleLeft: String,
        subtitleRight: String,
        linkLeft: String,
        linkRight: String
    }
}
</script>