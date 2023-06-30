<!--
    Page with the list of all the projects.
-->
<template>
    <centerTitleImg 
            title="OUR PORTFOLIO" 
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
            />
    <button class="text-white h-40 w-40" @click="setFilter()"></button>
    <div class="relative ">
        <div class="flex md:flex-row flex-col uppercase text-sm absolute inset-x-0 md:bottom-5 bottom-32">
            <button class="uppercase itemButton mr-auto ml-auto md:basis-1/3 basis-full mb-14" @click="filterItems('')">
                All
            </button>
            <button class="uppercase itemButton mr-auto ml-auto md:basis-1/3 basis-full mb-14" v-for="(area, index) in areas" :key="index" @click="filterItems(area.code)">
                {{ area.name }}
            </button>
        </div>
    </div>
    
    <ProjectList :projects= "filteredProject"/>
</template>

<script>
import { stringify } from 'postcss'

    export default defineNuxtComponent({
        async asyncData() {
            const projects = await $fetch('/api/projects')
            const areas = await $fetch('/api/areas')
            const filteredProject = projects;
            return {
                projects,
                filteredProject,
                areas
            }
        }, 
        methods: {
            filterItems(filter){
                this.filteredProject = this.projects.filter(r => r.area.toLowerCase().includes(filter?.toLowerCase()))
            }

        }
    })
</script>

