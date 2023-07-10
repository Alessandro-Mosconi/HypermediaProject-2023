<!--
    Page with the list of all the projects.
-->
<template>
<div class="overflow-hidden flex flex-col items-center">
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
        },
        setup() {
            const title = 'Best Projects - Celesta Capital 🪐'
            const description = 'Discover a selection of our best projects: Axiom Space, Blue Origin, Kymeta, Eutelsat, Satixfy.'
            const image = 'https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/logo/avatar-834545934%20(1).jpg?t=2023-07-10T17%3A06%3A43.844Z'
            useSeoMeta({
                title: title,
                ogTitle: title,
                description: description,
                ogDescription: description,
                ogImage: image,
            })
        }
    })
</script>

