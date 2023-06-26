<!--
    Page with the list of all the projects.
-->
<template>
    <centerTitleImg 
            title="OUR BEST PROJECTS" 
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
            />
    <ProjectList :projects= "projects"/>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const projects = await $fetch('/api/projects/best-projects')
            return {
                projects
            }
        }
    })
</script>

