<!--
    Header of the page
-->
<template>
    <header class="sticky top-0 z-50 backdrop-blur-md backdrop-brightness-50">
      <div class="flex content-between px-4 py-2 w-full max-lg:">
          <div class="flex items-center px-4 py-5 w-full space-x-3">
            <nuxt-link to="/">
        <img class="h-8 w-auto" src="@/assets/img/CELESTA_WHITE.png" alt="Celesta Capital" />
      </nuxt-link>
            <h1 class="text-white font-bold text-xl tracking-wide"> Celesta Capital</h1>
        </div>
        <nav class="flex items-center space-x-10">
          <nuxt-link
            id="about"
            exact
            to="/about"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
            font-medium tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >About</nuxt-link>
          <nuxt-link
            id="team"
            exact
            to="/team"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
            font-medium tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >team</nuxt-link>
          <nuxt-link
            id="projects"
            exact
            to="/projects/"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
            font-medium tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >all projects</nuxt-link>
          <nuxt-link
            id="AREAS"
            exact
            to="/areas"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
            font-medium tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >investment areas</nuxt-link>
          <nuxt-link
            id="contact"
            exact
            to="/contact"
            active-class="text-orange-500"
            class="
            text-orange hover:text-orange-500 transition-colors duration-300
            font-medium tracking-wide uppercase text-sm
            pb-[3px] relative group"
          >contacts</nuxt-link>
        </nav>
      </div>
</header>  
 </template>
  
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