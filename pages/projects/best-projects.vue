<!--
    Page with the list of all the projects.
-->
<template>
<div class="flex flex-col items-center">
    <CenterTitleImg 
            title="OUR BEST PROJECTS" 
            img=""
            :widthImage="'contain'"
            class="md:mt-20 h-[40vh]"
            />
    <projectList :projects= "projects" :areas="areas"/>

    <div class="uppercase text-6xl font-ABCbold">want to see more?</div>
    <Chip class="my-8 text-2xl" text="VISIT OUR PORTFOLIO" link="/projects" :isButton="true"  />
</div>
</template>

<script>

    export default defineNuxtComponent({
        async asyncData() {
            
            const [projects, areas] = await Promise.all([
                $fetch('/api/projects/best-projects'),
                $fetch('/api/areas'),
            ]);

            return {
                projects,
                areas
            }
        }
    })
</script>

