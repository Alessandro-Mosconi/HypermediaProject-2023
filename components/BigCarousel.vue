<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div v-for="project in projects" data-carousel-item>
                <div v-if="project.length > 0">
                    <CardProject
                        :projectName="project[0].name"
                        :img="project[0].img_url"
                        :area="project[0].area"
                    />
                </div>
                <div v-if="project.length > 1">
                    <CardProject
                        :projectName="project[1].name"
                        :img="project[1].img_url"
                        :area="project[1].area"
                    />
                </div>
                <div v-if="project.length > 2">
                    <CardProject
                        :projectName="project[2].name"
                        :img="project[2].img_url"
                        :area="project[2].area"
                    />
                </div>
            </div>
            <!--            &lt;!&ndash; Item 1 &ndash;&gt;-->
            <!--            <div class="duration-700 ease-in-out" data-carousel-item>-->
            <!--                <img src="https://shorturl.at/owKU6" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
            <!--            </div>-->
            <!--            &lt;!&ndash; Item 2 &ndash;&gt;-->
            <!--            <div class="hidden duration-700 ease-in-out" data-carousel-item>-->
            <!--                <img src="https://shorturl.at/fQV38" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
            <!--            </div>-->
        </div>
        <!-- Slider controls -->
        <button type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev @click="prevSlide">
            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next @click="nextSlide">
            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<script>

export default {
    data: () => ({
        colors: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']],
    }),

    props: {
        'projects': Array,
    },

    methods: {
        nextSlide() {
            const carousel = document.querySelector('[data-carousel="slide"]');
            carousel.dispatchEvent(new CustomEvent('next.carousel', {bubbles: true}));
        },
        prevSlide() {
            const carousel = document.querySelector('[data-carousel="slide"]');
            carousel.dispatchEvent(new CustomEvent('prev.carousel', {bubbles: true}));
        }
    },
    mounted() {
        const carousel = document.querySelector('[data-carousel="slide"]');

        carousel.addEventListener('next.carousel', () => {
            const currentImage = carousel.querySelector('[data-carousel-item]:not(.hidden)');
            const nextImage = currentImage.nextElementSibling || carousel.querySelector('[data-carousel-item]:first-child');

            currentImage.classList.add('hidden');
            nextImage.classList.remove('hidden');
        });

        carousel.addEventListener('prev.carousel', () => {
            const currentImage = carousel.querySelector('[data-carousel-item]:not(.hidden)');
            const prevImage = currentImage.previousElementSibling || carousel.querySelector('[data-carousel-item]:last-child');

            currentImage.classList.add('hidden');
            prevImage.classList.remove('hidden');
        });
    }
};
</script>
