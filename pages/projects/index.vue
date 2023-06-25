<!--
    Page with the list of all the projects.
-->
<template>
    <centerTitleImg 
            title="OUR PORTFOLIO" 
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
            />
    <ProjectList :projects= "projects"/>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const projects = await $fetch('/api/projects')
            return {
                projects
            }
        }
    })
</script>

