<!--
    Page with the list of all the projects.
-->
<template>
<div class="flex flex-col items-center">
    <centerTitleImg 
            title="OUR BEST PROJECTS" 
            img=""
            :widthImage="'contain'"
            class="md:mt-20 h-[40vh]"
            />
    <projectList :projects= "projects"/>

    <div class="uppercase text-6xl font-ABCbold">want to see more?</div>
    <Chip class="my-8 text-2xl" text="VISIT OUR PORTFOLIO" link="/projects" :isButton="true"  />
</div>
</template>

<script>
import { useColor } from '~/stores/color';

    export default defineNuxtComponent({
        async asyncData({ $pinia }) {
            const areaColors = useColor($pinia).areaColors
            
            const projects = await $fetch('/api/projects/best-projects')

            return {
                projects,
                areaColors
            }
        }
    })
</script>

