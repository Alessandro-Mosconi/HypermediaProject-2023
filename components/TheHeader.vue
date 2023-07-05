<!--
    Header of the page
-->
<template>
    <header
        class="text-white w-full flex sticky md:fixed items-center justify-between z-[999] backdrop-blur-[10px] text-center backdrop-brightness-30 px-[6%] py-0 top-0">
        <div class="flex content-between py-2 w-full ">
            <div class="flex items-center pr-8 py-5 w-auto min-w-max space-x-3">
                <NuxtLink v-if="toggle" @click="toggleVariable" to="/">
                    <img class="h-8 w-8 object-contain" src="@/assets/img/CELESTA_WHITE.png" alt="Celesta Capital"/>
                </NuxtLink>
                <NuxtLink v-if="!toggle" to="/">
                    <img class="h-8 w-8 object-contain" src="@/assets/img/CELESTA_WHITE.png" alt="Celesta Capital"/>
                </NuxtLink>
                <h1 class="text-white font-bold text-xl tracking-wide"> Celesta Capital</h1>
            </div>
            <!-- Standard menu -->
            <nav class="lg:ml-auto lg:mr-auto min-w-max w-auto flex items-center lg:space-x-8 xl:space-x-12 lg:flex hidden">
                <NuxtLink
                    id="about"
                    exact
                    to="/about"
                    active-class="text-orange-500"
                    class="text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
                >About
                </NuxtLink>
                <NuxtLink
                    id="team"
                    exact
                    to="/team"
                    active-class="text-orange-500"
                    class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
                >team
                </NuxtLink>
                <NuxtLink
                    id="best-projects"
                    exact
                    to="/projects/best-projects"
                    active-class="text-orange-500"
                    class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
                >best projects
                </NuxtLink>
                <NuxtLink
                    id="all projects"
                    exact
                    to="/projects/"
                    active-class="text-orange-500"
                    class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
                >all projects
                </NuxtLink>
                <NuxtLink
                    id="areas"
                    exact
                    to="/areas"
                    active-class="text-orange-500"
                    class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
                >investment areas
                </NuxtLink>
                <NuxtLink
                    id="contact"
                    exact
                    to="/contact"
                    active-class="text-orange-500"
                    class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
                >contacts
                </NuxtLink>
            </nav>
            <!-- Mobile menu button -->
            <nav v-if="!toggle" class="lg:hidden ml-auto flex items-center">
                <button class="outline-none mobile-menu-button" @click="toggleVariable">
                    <svg
                        class="w-10 h-9 text-white-500"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M4 6 h20 M4 12 h20 M4 18 h20"></path>
                    </svg>
                </button>
            </nav>
            <nav v-if="toggle" class="lg:hidden ml-auto flex items-center">
                <button class="outline-none mobile-menu-button" @click="toggleVariable">
                    <svg
                        class="w-10 h-9 text-white-500"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </nav>
        </div>
    </header>
    <!-- Mobile menu -->
    <div v-if="toggle"
         class="lg:hidden fixed inset-0 bg-black backdrop-brightness-10 z-20 flex flex-col items-center justify-center">
        <NuxtLink
            @click="toggleVariable"
            id="about"
            exact
            to="/about"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
        >About
        </NuxtLink>
        <NuxtLink
            @click="toggleVariable"
            id="team"
            exact
            to="/team"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
        >team
        </NuxtLink>
        <NuxtLink
            @click="toggleVariable"
            id="best-projects"
            exact
            to="/projects/best-projects"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
        >best projects
        </NuxtLink>
        <NuxtLink
            @click="toggleVariable"
            id="projects"
            exact
            to="/projects/"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
        >all projects
        </NuxtLink>
        <NuxtLink
            @click="toggleVariable"
            id="AREAS"
            exact
            to="/areas"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
        >investment areas
        </NuxtLink>
        <NuxtLink
            @click="toggleVariable"
            id="contact"
            exact
            to="/contact"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
        >contacts
        </NuxtLink>
    </div>
</template>


<script>
export default {
    data() {
        return {
            toggle: false
        }
    },

    methods: {
        toggleVariable() {
            this.toggle = !this.toggle;
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'ABCWhyteLight';
    src: url('@/assets/fonts/ABCWhyte/ABCWhyte-Extralight-Trial.otf') format('truetype');
}

.logo {
    height: 35px;
    width: 35px;
}
</style>