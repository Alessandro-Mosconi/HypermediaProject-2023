<template>
    
  <div>
    <div class="flex flex-col sm:flex-row justify-center">
        <div class="flex flex-col"> 
      <div v-for="(p, index) in projects" :key="index" class="p-4 mb-[-30px]">

      <div v-if="index % 2 ===0">
        <NuxtLink id="about" :to="'/projects/' + p.id">
          <cardProject 
            :projectName="p.name"
            :img="p.img_url"
            :area= "p.area"/>
         </NuxtLink>
         </div>

    </div>
    </div>
    <!-- second column --> 
    <div class="flex flex-col justify-center"> 
      <div v-for="(p, index) in projects" :key="index" class="p-4">
        <div v-if="index % 2 ===1">
        <!-- empty space -->
        <div class="sm:flex hidden" style="
          width: 300px;
          height: 160px;
          background-color: rgba(255, 0, 0, 255);
        "></div>

      <div>
        <NuxtLink id="about" :to="'/projects/' + p.id">
          <cardProject 
            :projectName="p.name"
            :img="p.img_url"
            :area= "p.area"/>
         </NuxtLink>
         </div>
    </div>
    </div>
    </div>

     </div>
   </div>
</template>

<script>
export default {
    props: [
        'projects'
    ]
}
</script>

<style scoped>
.itemButton {
    /* Add your button styles here */
    background-color: #f2f2f200;
    border: 2px solid white;
    border-radius: 40px;
    padding: 10px;
    margin-bottom: 14px;
}
</style>
