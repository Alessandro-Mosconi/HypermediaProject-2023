<template>
  <div class="lg:h-72 sm:h-44 h-32" style="height: 250px; width: 300px;">
    <div class="relative">
      <div class="absolute h-full w-full z-10">
        <img :src="img" alt="" class="h-full w-full object-cover"/>
      </div>
      <button class="h-full w-full bg-transparent hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
        <h1 class="mt-auto mr-2">→</h1>
      </button>
    </div>
    <NuxtLink :to="/projects/"><h1 class="text-3xl uppercase" >{{ projectName  }}</h1></NuxtLink>
      <NuxtLink :to="/projects/"><h2>{{ area }}</h2></NuxtLink>
  </div>
</template>

  <script>
  export default {
    props: {
      projectName: String,
      area: String,
      img: String,
    }
  }
  </script>