<template>
    <main>
        <div class="flex flex-wrap h-full">
            <div v-for="a in areas"
                 class="justify-center ml-auto mr-auto">
                <NuxtLink id="about area" :to='"/areas/" + a.code'>
                    <ImageCard class="lg:h-80 sm:h-64 h-32" :img_link="a.thumb_url" :alt="a.name" :color="getColorByArea(a?.code)"/>
                    <div class=" mt-4 mb-4 font-medium text-sm lg:text-2xl">{{ a.name.toUpperCase() }}</div>
                    <i :style="'color: ' + getColorByArea(a?.code)+ ';'" class="fa-solid fa-arrow-right text-2xl"></i>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        areas: Array,
        areaColors: Array,
    },
    methods: {
        getColorByArea(areaCode) {
            console.log(areaCode)
            const color = this.areaColors?.find( row => row.code === areaCode ).color;
            return color? color : '#FFFFFF' ;
        }

    }
}
</script>