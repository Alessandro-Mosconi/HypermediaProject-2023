<template>
    <div class="relative w-full">
        <img class="w-full h-[60vh] object-cover md:h-[75vh]" :src="img" alt="Banner Image"/>
        <NuxtLink :to="'/projects/' + areaCode">
            <div class="absolute top-0 font-light md:mt-28 mt-4 leading-[4vh] text-xs left-[5vh] bottom-[3vh] md:text-base">
                <p class="p-0 hover:underline cursor-pointer">← see all</p>
            </div>
        </NuxtLink>
        <div
            class="absolute font-[500] uppercase leading-[4vh] text-4xl left-[5vh] bottom-[3vh] md:text-6xl lg:text-7xl mt-[25%]">
            <div v-if="top !== '0'" class="text-xl mb-4 font-light md-8 mb:text-4xl md:mb-8">#0{{ top }} BEST PROJECT
            </div>
            {{ name }}<br/>
            <NuxtLink :to="'/areas/' + areaCode">
                <button class="text-xs bg-[#121212] mt-3 mx-[5px] rounded-[40px] border-2 border-solid font-normal mb-1 uppercase itemButton px-[10px] py-[8px]
                                md:mb-4 md:text-xl md:px-[25px] md:py-[15px]"
                        :style="`border-color: ${getColorByArea(areaCode)};`">
                    {{ area.name + ' ↗' }}
                </button>
            </NuxtLink>
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