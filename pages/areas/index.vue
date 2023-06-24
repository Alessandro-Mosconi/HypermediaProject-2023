<!--
    Investments area
-->
<template>
    <main>
        <centerTitleImg title="WHERE WE INVEST"
                        img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
                        description=""/>
        <div class="p-[5%] mt-20">
            <AreaList :areas="areas"/>
        </div>

    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const areas = await $fetch('/api/areas')
        return {
            areas
        }
    }
})
</script>