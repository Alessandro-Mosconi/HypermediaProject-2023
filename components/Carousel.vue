<template>
    <div class="flex flex-col items-center justify-center w-full">
        <div class="flex justify-between w-full">

            <NuxtLink :to="linkLeft">
                <div class="flex items-center hover:scale-110 transition-transform duration-300">
                    <i class="fa-solid fa-arrow-left text-2xl"></i>
                    <div class="relative h-24 m-3">
                        <div class="h-full w-full">
                            <img :src="imageLeft" alt="" class="h-full w-full object-cover"/>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="font-extralight">
                            {{ subtitleLeft }}
                        </div>
                        <div>
                            {{ titleLeft }}
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <NuxtLink :to="linkLeft">
                <div class="flex items-center hover:scale-110 transition-transform duration-300">
                    <div class="flex flex-col items-end">
                        <div class="font-extralight">
                            {{ subtitleRight }}
                        </div>
                        <div>
                            {{ titleRight }}
                        </div>
                    </div>
                    <div class="relative h-24 m-3">
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

<style>

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.arrow {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
}

.text {
    display: flex;
    flex-direction: column;
    font-size: 14px;
}

.text p {
    margin: 5px 0;
}
</style>