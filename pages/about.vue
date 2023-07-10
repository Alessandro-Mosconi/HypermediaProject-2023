<!--
    About us page
-->
<template>
    <main>
        <CenterTitleImg 
            class="md:!h-[110vh] !h-[60vh] mb-20 md:mb-40"
            title="ABOUT US" 
            planet="jupiter"
            :posImage="'top'"
            description="Igniting breakthroughs, shaping the future of exploration, and propelling humanity towards a boundless universe, where the stars are no longer out of reach." 
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/home_planet_tmp.png"/>
            <ThreeItemsImgBg
            img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/Galaxy%20-%20Descriptive%20Image.jpg">
            </ThreeItemsImgBg>
            <BigTextParagraph
                bigText="Our vision"
                paragraph="To be a leading venture capital firm in the space industry, investing in companies that are transforming the way we explore and utilize space, and driving positive impact for humanity."
            ></BigTextParagraph>
            <BigTextParagraph
                bigText="Our mission"
                paragraph="Our mission is to support the growth and success of visionary entrepreneurs who are driving innovation and progress in the space industry. We seek out investments in companies with strong technical capabilities and a commitment to making a positive impact on the space industry and the world at large. Through strategic partnerships, long-term thinking, and a collaborative approach, we aim to help our portfolio companies achieve their goals and advance the frontiers of space exploration and utilization."
            ></BigTextParagraph>
            <BigTextParagraph
                bigText="Our story"
                paragraph="Back in the early 2010s, our team of passionate space enthusiasts and experienced investors embarked on an extraordinary journey. Fueled by our unwavering fascination with the cosmos, we realized it was time to make a real impact in the space industry. That's when Celesta Capital was born. Inspired by the boundless wonders of the universe, we set out on a mission to ignite innovation and propel humanity towards a future where the stars are no longer out of reach. With every investment we make, we're dedicated to supporting visionary entrepreneurs, who dare to challenge the limits and shape the course of space exploration. Together, we're rewriting the narrative of our cosmic journey, unlocking the extraordinary potential of the final frontier."
            ></BigTextParagraph>
    </main>
</template>

<script setup>
const title = 'About us - Celesta Capital 🪐'
const description = 'Celesta Capital aims to become a leading venture capital firm in the space industry, investing in innovative companies and driving positive impact for humanity.'
const image = 'https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/logo/avatar-834545934%20(1).jpg?t=2023-07-10T17%3A06%3A43.844Z'
useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
    ogImage: image,
})
</script>