

<template>
    <main>
        <ProjectBanner :name="pro.name" :areaCode="pro.area" :img="pro.img_url" ></ProjectBanner>
        <div class="md:ml-10 ml-5 mr-5 mt-[2em]">
            <div class="mt-10 md:mt-20">
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'Supervised by'"></SmallTextParagraph>
                </div>
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'Project Description'"
                                        :paragraph="pro.description"></SmallTextParagraph>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const pro = await $fetch('/api/projects/' + route.params.id)

        return {
            pro
        }
    }
})
</script>

