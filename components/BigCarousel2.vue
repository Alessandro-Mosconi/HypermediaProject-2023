<template>
    <div id="carousel" class="relative w-full">
        <!-- Carousel wrapper -->
        <div class="flex relative h-56 overflow-y-hidden md:h-96">
            <div class="flex">
                <CardProject
                    :id = "'card-' + project.id"
                    v-for="project in projects"
                    :key="project.id"
                    :projectName="project.name"
                    :projectId="project.id"
                    :img="project.img_url"
                    :area="project.area"
                    class="m-6"
                />
            </div>
        </div>
        <!-- Slider controls -->
        <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            @click="prevSlide"
        >
      <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
        </button>
        <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            @click="nextSlide"
        >
      <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        projects: Array,
    },
    methods: {
        prevSlide() {

        },
        nextSlide() {

        },
    },
    mounted() {}
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    height: 2vh;
}

::-webkit-scrollbar-track-piece {
    height: 50px;
}

::-webkit-scrollbar-track {
    background: black;
    margin: 200px;
}

/* Track */

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(230, 230, 230, 1);
    border-radius: 40px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(230, 230, 230, 0.8);
}
</style>
