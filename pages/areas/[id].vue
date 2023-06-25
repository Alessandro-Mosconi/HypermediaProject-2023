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
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const area = await $fetch('/api/areas/' + route.params.id)

        return {
            area
        }
    }
})
</script>

<style scoped>

</style>