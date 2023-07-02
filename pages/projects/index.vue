<!--
    Page with the list of all the projects.
-->
<template>
    <div class="flex flex-col items-center">
        <centerTitleImg
            title="OUR PORTFOLIO"
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
        />
        <div class="flex flex-wrap items-center justify-center">
            <button :style="{ backgroundColor: currentArea === '' ? getColorByArea(currentArea) : ''}" class="uppercase itemButton mb-14"
                    @click="filterItems('')">
                All
            </button>
            <button :style="{ backgroundColor: currentArea === area.code ? getColorByArea(currentArea) : '' }"
                    v-for="(area, index) in areas" :key="index" @click="filterItems(area.code)"
                    class="uppercase itemButton mb-14">
                {{ area.name }}
            </button>
        </div>
        <ProjectList2 :projects="filteredProject"/>
    </div>
</template>

<script>
import { useColor } from '~/stores/color';

export default defineNuxtComponent({
    async asyncData({ $pinia }) {
        const areaColors = useColor($pinia).areaColors;

        const projects = await $fetch('/api/projects')
        const areas = await $fetch('/api/areas')
        const filteredProject = projects;
        return {
            projects,
            filteredProject,
            currentArea: "",
            areas,
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
