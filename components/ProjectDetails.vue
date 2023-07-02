<!--
    Big text with paragraph on the right
-->

<template>
    <div class="flex">
        <div class="field 2-full lg:w-2/5 md:text-lg" :style="{color: getColorByArea(areaCode)}">
            CLIENT
            <img :src="img" v-if="img" class="max-h-16 max-w-[85vw] mb-10">
        </div>
        <div class="flex-grow mt-3 md:mt-0 w-full lg:w-3/5">
             <div class="field" :style="{color: getColorByArea(areaCode)}">INVESTMENT</div>
            <p>{{ investment }}</p>
        </div>
        <div class="flex-shrink">
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
        paragraph: String,
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
    margin-bottom: 0.5em;
}

@media only screen and (max-width: 55em) {
    .component {
        flex-direction: column
    }

    .small-text {
        text-align: left
    }

    .paragraph-section {
        width: 80%;
    }
}
</style>