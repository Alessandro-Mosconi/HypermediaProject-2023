<template>
    <div class="relative w-full">
        <img class="w-full h-[40vh] object-cover md:h-[70vh]" :src="img" alt="Banner Image"/>
        <div class="absolute font-semibold leading-[4vh] text-4xl left-[5vh] bottom-[3vh] md:mt-[5%] md:text-5xl lg:text-8xl mt-[25%]">
            {{ name }}<br />
            <span :style="{color: getColorByArea(areaCode)}" class="uppercase">{{ area.name }}</span>
        </div>
    </div>
</template>

<script>
import { useColor } from '~/stores/color';

export default defineNuxtComponent({
    async asyncData({ $pinia }) {
        const areaColors = useColor($pinia).areaColors;

        const area = await $fetch('/api/areas/SPACE_TOURISM')
        
        return {
            area,
            areaColors
        }
    },
    props: {
        img: String,
        name: String,
        areaCode: String,
    },
    methods: {
        getColorByArea(areaCode) {
            const color = this.areaColors.find( row => row.code === areaCode ).color;
            return color? color : '#FFFFFF' ;
        }
    }
})
</script>