<!--
    Page with the list of all the projects.
-->
<template>
    <div class="flex flex-col items-center">
        <centerTitleImg
            title="OUR PORTFOLIO"
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/home_planet_tmp.png"
            :widthImage="'contain'"
            :subtitle="filteredProject?.length + ' projects, ' + areas?.length + ' investment areas'"
            :posImage="'center 100px'"
            class="md:!h-[85vh] h-[60vh]"
        />
        <div class="flex flex-wrap items-center justify-center !h-[15vh] mb-10 text-xs md:text-2xl">
            <button :style="{ backgroundColor: currentArea === '' ? getColorByArea(currentArea) : ''}" class="uppercase itemButton mb-14 transition-transform transform hover:scale-110"
                    @click="filterItems('')">
                All
            </button>
            <button :style="{ backgroundColor: currentArea === area.code ? getColorByArea(currentArea) : '' }"
                    v-for="(area, index) in areas" :key="index" @click="filterItems(area.code)"
                    class="uppercase itemButton mb-14 transition-transform transform hover:scale-110">
                {{ area.name }}
            </button>
        </div>
        <projectList :projects="filteredProject" :areas="areas"/>
    </div>
</template>

<script>
import { useColor } from '~/stores/color';

export default defineNuxtComponent({
    async asyncData() {

        const [projects, areas] = await Promise.all([
                $fetch('/api/projects'),
                $fetch('/api/areas'),
            ]);

        const filteredProject = projects;
        return {
            projects,
            filteredProject,
            areas
        }
    },
    data({ $pinia }) {
        const areaColors = useColor($pinia).areaColors;
        const currentArea = '';
        
        return {
            currentArea,
            areaColors
        }

    },
    methods: {
        filterItems(filter) {
            this.filteredProject = this.projects.filter(r => r.area.toLowerCase().includes(filter?.toLowerCase()))
            this.currentArea = filter;
        },
        getColorByArea(areaCode) {
            const color = this.areaColors.find( row => row.code === areaCode ).color;
            return color? color : '#FFFFFF' ;
        }

    }
})
</script>

<style scoped>
.itemButton {
    /* Add your button styles here */
    background-color: #f2f2f200;
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
