<template>
    <div class="scrolling-text">
        <h2 v-for="n in 10" class="uppercase ml-5 mt-5 mb-10 font-[500] text-5xl md:text-7xl md:mt-20">
            <span>SATELLITES SPACE MINING SPACE TOURISM</span>
        </h2>
    </div>
</template>

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
