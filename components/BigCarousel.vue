<template>
    <div id="carousel"
         class="relative w-full mb-20"
         @mousedown="startScroll"
         @mouseup="stopScroll"
         @mouseleave="stopScroll">
        <!-- Carousel wrapper -->
        <div class="flex relative h-75 overflow-y-hidden md:h-120"
             ref="carouselWrapper"
             :style="{ cursor: isScrolling ? 'grabbing' : 'grab' }">
            <div class="flex">
                <div class="ml-7 md:ml-12"></div>
                <CardProject
                    class="p-6"
                    :id="'card-' + project.id"
                    v-for="project in projects"
                    :key="project.id"
                    :projectName="project.name"
                    :projectId="project.id"
                    :img="project.img_url"
                    :area="project.area"
                />
            </div>
        </div>
        <!-- Slider controls -->
        <button
            type="button"
            class="absolute top-0 left-0 z-2 text-3xl md:text-5xl transition-transform transform hover:scale-125 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            @click="prevSlide">
            ←
        </button>
        <button
            type="button"
            class="absolute top-0 right-0 z-2 text-3xl md:text-5xl transition-transform transform hover:scale-125 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            @click="nextSlide">
            →
        </button>
    </div>
</template>

<script>
export default {
    props: {
        projects: Array,
    },
    data() {
        return {
            isScrolling: false,
            startX: 0,
            scrollLeft: 0,
            currentIndex: 0,
        };
    },
    methods: {
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.scrollToSlide();
            }
        },
        nextSlide() {
            if (this.currentIndex < this.projects.length - 1) {
                this.currentIndex++;
                this.scrollToSlide();
            }
        },
        scrollToSlide() {
            console.log(this.$refs.carouselWrapper.children[0].children[1])
            console.log(this.$refs.carouselWrapper.children[0].children[2])
            const slideWidth = this.$refs.carouselWrapper.children[0].children[1].offsetWidth;
            const scrollOffset = this.currentIndex * slideWidth;

            this.$refs.carouselWrapper.scrollTo({
                left: scrollOffset,
                behavior: 'smooth',
            });
        },
        startScroll(event) {
            this.isScrolling = true;
            this.startX = event.clientX - this.$refs.carouselWrapper.offsetLeft;
            this.scrollLeft = this.$refs.carouselWrapper.scrollLeft;
            window.addEventListener("mousemove", this.scrollCarousel);

            // Disable scrolling if already at the beginning or end
            if (
                (this.currentIndex === 0 && this.startX < 0) ||
                (this.currentIndex === this.projects.length - 1 &&
                    this.startX > this.$refs.carouselWrapper.offsetWidth)
            ) {
                this.isScrolling = false;
                window.removeEventListener("mousemove", this.scrollCarousel);
            }
        },
        stopScroll() {
            this.isScrolling = false;
            window.removeEventListener("mousemove", this.scrollCarousel);
        },
        scrollCarousel(event) {
            if (!this.isScrolling) return;
            event.preventDefault();
            const x = event.clientX - this.$refs.carouselWrapper.offsetLeft;
            const scrollOffset = x - this.startX;
            this.$refs.carouselWrapper.scrollLeft = this.scrollLeft - scrollOffset;
        },
    },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    height: 1vh;
}

::-webkit-scrollbar-track {
    background: black;
    margin: 80vh;
}

::-webkit-scrollbar-thumb {
    background: rgba(220, 220, 220, 1);
    border-radius: 40px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(230, 230, 230, 0.85);
}
</style>
