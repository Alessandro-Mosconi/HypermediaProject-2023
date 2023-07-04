<!--
    Page with the list of all the projects.
-->
<template>
    <div class="flex flex-col items-center">
    <centerTitleImg 
            title="OUR BEST PROJECTS" 
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
            :widthImage="'contain'"
            class="md:!h-[75vh] h-[40vh]"
            />
    <projectList :projects= "projects"/>
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

