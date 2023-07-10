<!--
    Graphical component that show text with scrolling animation
-->
<template>
    <div class="scrolling-text">
        <h2 v-for="n in 10" class="uppercase ml-5 mt-5 mb-10 font-[500] text-5xl md:text-7xl md:mt-20">
            <span>{{text}}</span>
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
    }
}
</script>

<style scoped>
.scrolling-text {
    white-space: nowrap;
    overflow: hidden;
}

.scrolling-text h2 {
    display: inline-block;
    animation: scrollText 30s linear infinite;
}

@keyframes scrollText {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
