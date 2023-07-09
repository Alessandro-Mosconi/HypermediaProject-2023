<template>
    <div class="flex md:flex-row flex-col text-start">
        <div class="2-full md:w-2/5 mb-10 ">
            <div class="field" :style="{color: getColorByArea(areaCode)}">CLIENT</div>
            <div class="w-full"><img :src="img" v-if="img" class="max-h-12 max-w-[100%] md:ml-0 md:mr-0 mr-auto"></div>
        </div>
        <div class="mt-3 md:mt-0 w-full md:w-[30%] mb-10 ">
             <div class="field" :style="{color: getColorByArea(areaCode)}">INVESTMENT</div>
            <p>{{ investment }}</p>
        </div>
        <div class="mb-10 ">
            <div class="field" :style="{color: getColorByArea(areaCode)}">DATES</div>
            <p>{{ dates }}</p>
        </div>
    </div>
</template>

<script>


export default {

    data({$pinia}) {
        const areaColors = useColor($pinia).areaColors;

        return {
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
}
</script>

<style scoped>
p {
    padding: 0;
}

.field {
    font-weight: 200;
    margin-bottom: 0.2em;
}

</style>