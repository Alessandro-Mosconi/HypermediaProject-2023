<!--
    Investments area
-->

<template>
    <main>
        <centerTitleImg
            title="WHERE WE INVEST"
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
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

import { useColor } from '~/stores/color';

export default defineNuxtComponent({
    async asyncData({ $pinia }) {
        const areas = await $fetch('/api/areas');
        const areaColors = useColor($pinia).areaColors;
        return {
            areas,
            areaColors
        }
    }
})
</script>