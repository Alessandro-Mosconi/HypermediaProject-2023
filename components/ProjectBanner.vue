<template>
    <div class="relative w-full">
        <img class="w-full h-[40vh] object-cover md:h-[70vh]" :src="img" alt="Banner Image"/>
        <NuxtLink :to="'/projects/' + areaCode">
            <div class="absolute top-0 font-light leading-[4vh] text-2xl left-[5vh] bottom-[3vh] md:mt-[5%] md:text-5xl lg:text-2xl mt-[25%]">
                <p class="p-0 hover:underline cursor-pointer">← see all</p>
            </div>
        </NuxtLink>
        <div
            class="absolute font-[500] uppercase leading-[4vh] text-4xl left-[5vh] bottom-[3vh] md:mt-[5%] md:text-5xl lg:text-7xl mt-[25%]">
            <div v-if="top !== '0'" class="text-4xl font-light mb-8">#0{{ top }} BEST PROJECT</div>
            {{ name }}<br/>
            <NuxtLink :to="'/areas/' + areaCode">
                <button class="text-xl font-normal uppercase itemButton"
                        :style="`border-color: ${getColorByArea(areaCode)};`">
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
})
</script>

<style scoped>
.itemButton {
    background-color: #121212;
    border: 2px solid;
    border-radius: 40px;
    padding: 15px 25px;
    margin-bottom: 14px;
    margin-right: 5px;
    margin-left: 5px;
}

</style>