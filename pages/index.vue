<!--
    Homepage
-->
<template>
    <CenterTitleImg
        title="SHAPING THE FUTURE OF SPACE"
        img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/earth_homepagee.png"
        class="md:!h-[100vh] !h-[50vh]"
        planet="mars"
        :widthImage="'110%'"
        :posImage="'top'"
    />
    <PosTitle
        paragraph="We are Visionaries aiming for a boundless universe."
        :position="'left'"
        class="mb-10">
    </PosTitle>
    <PosParagraph
        class="mb-10"
        :chipText="'FIND OUT MORE'"
        :chipLink="'/about'"
        :isButton="true" 
        :position="'right'"
        paragraph="We are a dynamic venture capital firm driving the acceleration of space innovation.
We empower visionary entrepreneurs, provide strategic investments and resources to shape the future of space exploration and technology."
    ></PosParagraph>
    <Manifest
    ></Manifest>
    <SingleItemImgBg
        title="INVESTMENT AREAS"
        link="/areas"
        img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/areas/Satellites%20-%20Descriptive%20Picture.jpg?t=2023-06-29T07%3A35%3A12.540Z"
    />
    <div class="flex w-full p-6 mt-10 justify-start text-start font-semibold text-3xl md:text-5xl md:p-10">FROM OUR PORTFOLIO</div>
    <BigCarousel
        :projects="projects">
    </BigCarousel>

</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const projects = await $fetch('/api/projects')
        return {
            projects
        }
    },
    methods: {
        bgImage() {
            return '';
        },
    }
})
</script>

<style>
main {
    width: 100%;
    position: relative;
}
</style>