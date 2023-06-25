<template>
    <div class="card flex flex-col p-5">
      <button class="h-full w-full bg-cover bg-center" :style="{ 'background-image': `url('${img}')` }">
        <h1 class="mt-auto mr-2">→</h1>
      </button>
      <NuxtLink :to="link"><h1 class="text-3xl uppercase" >{{ projectName  }}</h1></NuxtLink>
      <NuxtLink :to="link"><h2 class="uppercase" :class="{ 'text-red-500': colorArea === 'red', 'text-green-500': colorArea === 'green' }">{{ area }}</h2></NuxtLink>
    </div>
</template>
  
  <script>
  export default {
    props: {
      projectName: String,
      area: String,
      img: String,
      colorArea: String
    }
  }
  </script>