<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component flex">
        <div class="2-full lg:w-2/5">
            <div class="field" :style="{color: getColorByArea(areaCode)}">CLIENT</div>
            <img :src="img" v-if="img" class="max-h-12 max-w-[85vw] mb-10">
        </div>
        <div class="mt-3 md:mt-0 w-full lg:w-3/5">
             <div class="field" :style="{color: getColorByArea(areaCode)}">INVESTMENT</div>
            <p>{{ investment }}</p>
        </div>
        <div class="">
            <div class="field" :style="{color: getColorByArea(areaCode)}">DATES</div>
            <p>{{ dates }}</p>
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
        investment: String,
        dates: String,
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

<style scoped>
p {
    padding: 0;
}

.field {
    font-weight: 200;
    margin-bottom: 0.2em;
}

@media only screen and (max-width: 55em) {
    .component {
        flex-direction: column;
        text-align: center;
    }
}
</style>