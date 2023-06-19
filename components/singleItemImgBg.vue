<!--
    Centered title with image background
-->
<template>
    <div class="relative h-[50vh] md:h-[40vh] xl:h-[70vh]">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ 'background-image': `url(${img})` }"></div>
      <div class="flex flex-col items-center justify-end h-full px-4 sm:px-6 lg:px-8">
        <button class="text-2xl bg-transparent text-white py-6 px-6 rounded-full uppercase tracking-wider absolute left-0 bottom-0 m-5 mb-4 border-4 border-white border-opacity-100">{{ title }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      img: String
    }
  }
  </script>
  
  <style scoped>
  .relative {
    position: relative;
  }
  
  .inset-y-auto {
    top:auto;
  }
  
  .bg-cover{
     background-size : cover !important; 
  }
  
  .h-full{
     height :100% !important; 
  }
  </style>