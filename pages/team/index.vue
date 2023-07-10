<!--
    Page with the list of all the location.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <CenterTitleImg 
            class="md:!h-[110vh] !h-[60vh] mb-20 md:mb-40"
            title="MEET OUR TEAM" 
            :posImage="'left'"
            :widthImage="'clamp(50vh, 50vw, 50vw) auto'"
            description="A FUSION OF VISIONARY STRATEGISTS, SEASONED INVESTORS, AND INDUSTRY PIONEERS, UNITED BY A PASSION FOR FUELLING SPACE INNOVATION AND DRIVING TRANSFORMATIVE IMPACT." 
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/image%2012.png"/>
        <div class="p-[5%]">
            <TeamList :people="people"/>
        </div>
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const people = await $fetch('/api/people')
        return {
            people
        }
    },
    setup() {
        const title = 'Team - Celesta Capital 🪐'
        const description = 'Meet the members of our team: a fusion of visionary strategists, investors and industry pioneers.'
        const image = 'https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/logo/avatar-834545934%20(1).jpg?t=2023-07-10T17%3A06%3A43.844Z'
        useSeoMeta({
            title: title,
            ogTitle: title,
            description: description,
            ogDescription: description,
            ogImage: image,
        })
    },
})
</script>