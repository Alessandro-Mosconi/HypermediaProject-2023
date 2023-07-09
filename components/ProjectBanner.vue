<template>
    <div class="relative w-full">
        <img class="w-full h-[70vh] object-cover md:h-[80vh]" :src="img" alt="Banner Image"/>

        <div class="absolute top-0 font-light md:mt-28 mt-4 leading-[4vh] text-xs left-[5vh] bottom-[3vh] md:text-base">
            <NuxtLink :to="'/projects/'">
                <p class="p-0">← see all</p>
            </NuxtLink>
        </div>

        <div
            class="absolute font-[500] uppercase leading-[4vh] text-4xl left-[5vh] bottom-[3vh] md:text-6xl lg:text-7xl mt-[25%]">
            <div v-if="top" class="text-xl mb-4 font-light md-8 md:text-4xl md:mb-8">#0{{ top }} BEST PROJECT
            </div>
            <div class="mb-10">{{ name }}</div>
            <Chip class="text-lg"
              :autoWidth="false"
              :text="area"
              :link="'/areas/' + areaCode"
              :isButton="true" 
              :borderColor="getColorByArea(areaCode)"
              :backgroundColor="'#121212'"
              >
            </Chip>
        </div>
    </div>
</template>

<script>
import {useColor} from '~/stores/color';

export default {
    data({$pinia}) {
        const areaColors = useColor($pinia).areaColors;

        return {
            areaColors
        }
    },
    props: {
        img: String,
        name: String,
        areaCode: String,
        area: String,
        top: String,
    },
    methods: {
        getColorByArea(areaCode) {
            const color = this.areaColors.find(row => row.code === areaCode).color;
            return color ? color : '#FFFFFF';
        }
    }
}
</script>

<style scoped>
.itemButton {
    background-color: #121212;
    border: 2px solid;
    border-radius: 40px;
    margin-right: 5px;
    margin-left: 5px;
}

</style>