<template>
    <div class="relative w-full">
        <img class="w-full h-[40vh] object-cover md:h-[70vh]" :src="img" alt="Banner Image"/>
        <div
            class="absolute font-[500] uppercase leading-[4vh] text-4xl left-[5vh] bottom-[3vh] md:mt-[5%] md:text-5xl lg:text-7xl mt-[25%]">
            {{ name }}<br/>
            <NuxtLink :to="'/areas/' + areaCode">
                <button class="text-xl font-normal uppercase itemButton"
                        :style="`border: 2px solid ${getColorByArea(areaCode)};`">
                    {{ area.name + ' ↗' }}
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import {useColor} from '~/stores/color';

export default defineNuxtComponent({
    async asyncData({$pinia}) {
        const areaColors = useColor($pinia).areaColors;

        const area = await $fetch('/api/areas/SPACE_TOURISM')

        return {
            genericArea: area,
            areaColors
        }
    },
    props: {
        img: String,
        name: String,
        areaCode: String,
        area: String,
    },
    methods: {
        getColorByArea(areaCode) {
            const color = this.areaColors.find(row => row.code === areaCode).color;
            return color ? color : '#FFFFFF';
        }
    }
})
</script>

<style scoped>
.itemButton {
    background-color: #121212;
    border: 2px solid white;
    border-radius: 40px;
    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 14px;
    margin-right: 5px;
    margin-left: 5px;
}

</style>