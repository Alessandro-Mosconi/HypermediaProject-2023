<!--
    Header of the page
-->
<template>
    <header class="sticky top-0 z-50 backdrop-blur-md backdrop-brightness-50">
      <div class="flex content-between px-4 py-2 w-full max-lg:">
          <div class="flex items-center px-4 py-5 w-full space-x-3">
            <nuxt-link to="/">
        <img class="h-8 w-8 object-contain" src="@/assets/img/CELESTA_WHITE.png" alt="Celesta Capital" />
      </nuxt-link>
            <h1 class="text-white font-bold text-xl tracking-wide"> Celesta Capital</h1>
        </div>
        <!-- Standard menu -->
        <nav class="flex items-center space-x-10 lg:flex hidden">
          <nuxt-link
            id="about"
            exact
            to="/about"
            active-class="text-orange-500"
            class="text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >About</nuxt-link>
          <nuxt-link
            id="team"
            exact
            to="/team"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >team</nuxt-link>
          <nuxt-link
          id="best-projects"
            exact
            to="/projects/best-projects"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >best projects</nuxt-link>
          <nuxt-link
            id="all projects"
            exact
            to="/projects/"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >all projects</nuxt-link>
          <nuxt-link
            id="areas"
            exact
            to="/areas"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >investment areas</nuxt-link>
          <nuxt-link
            id="contact"
            exact
            to="/contact"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >contacts</nuxt-link>
        </nav>
        <!-- Mobile menu button -->
        <nav v-if="!toggle" class="lg:hidden flex items-center">
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
        <nav v-if="toggle" class="lg:hidden flex items-center">
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
<div v-if="toggle" class="lg:hidden fixed inset-0 bg-black backdrop-brightness-10 z-20 flex flex-col items-center justify-center">
          <nuxt-link
            @click="toggleVariable"
            id="about"
            exact
            to="/about"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
          >About</nuxt-link>
          <nuxt-link
            @click="toggleVariable"
            id="team"
            exact
            to="/team"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
          >team</nuxt-link>
          <nuxt-link
            @click="toggleVariable"
            id="best-projects"
            exact
            to="/projects/best-projects"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
          >best projects</nuxt-link>
          <nuxt-link
            @click="toggleVariable"
            id="projects"
            exact
            to="/projects/"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
          >all projects</nuxt-link>
          <nuxt-link
            @click="toggleVariable"
            id="AREAS"
            exact
            to="/areas"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
          >investment areas</nuxt-link>
            <nuxt-link
            @click="toggleVariable"
            id="contact"
            exact
            to="/contact"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
             tracking-wide uppercase text-lg
            pb-[3px] relative group"
          >contacts</nuxt-link>
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