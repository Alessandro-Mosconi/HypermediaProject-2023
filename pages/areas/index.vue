<!--
    Investments area
-->

<template>
    <main>
        <CenterTitleImg
            title="WHERE WE INVEST"
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
            planet="venus"
            :widthImage="'contain'"
            :posImage="'center 50px'"
            class="md:!h-[75vh] h-[60vh]"
        />
        <div class="p-[5%]">
            <AreaList :areas="areas" :areaColors="areaColors"/>
        </div>
        
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData({ $pinia }) {
        const areas = await $fetch('/api/areas');
        const areaColors = useColor($pinia).areaColors;
        return {
            areas,
            areaColors
        }
    },
    setup() {
        const title = 'Areas - Celesta Capital 🪐'
        const description = 'Discover where we invest: Space Mining, Space Tourism, Satellites.'
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