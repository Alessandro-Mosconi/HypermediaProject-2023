<template>
    <main>
        <AreaBanner :area="area.name" :areaCode="area.code" :image-url="area.banner_url"></AreaBanner>
        <div class="md:ml-10 ml-5 mr-5 mt-[2em]">
            <div class="mt-10 md:mt-20">
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'Description'"
                                        :paragraph="area.description"></SmallTextParagraph>
                </div>
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'Why'" :paragraph="area.why"></SmallTextParagraph>
                </div>
            </div>
        </div>
        <div class="flex text-start font-semibold text-5xl">RELATED PROJECTS</div>
        <BigCarousel>

        </BigCarousel>

        <LittleCarousel
            :imageLeft="area1.thumb_url"
            :subtitleLeft="'investment area'"
            :titleLeft="area1.name"
            :linkLeft="'/areas/' + area1.code"
            :imageRight="area2.thumb_url"
            :subtitleRight="'investment area'"
            :titleRight="area2.name"
            :linkRight="'/areas/' + area2.code">

        </LittleCarousel>
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const area = await $fetch('/api/areas/' + route.params.id)
        let otherAreas = await $fetch('/api/areas')
        otherAreas = otherAreas.filter((area) => area.code !== route.params.id)
        const area1 = otherAreas[0];
        const area2 = otherAreas[1];
        return {
            area,
            area1,
            area2
        }
    }
})
</script>

<style scoped>

</style>