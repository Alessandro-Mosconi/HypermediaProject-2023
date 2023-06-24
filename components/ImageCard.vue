<template>

  <div class="relative">
    <div class="mask-cornice absolute h-full z-10" >
<<<<<<< HEAD
        <img class="h-full" :style="bgColor" src="@/assets/img/transparent.png" alt="ciao" >
=======
        <img class="bg-light-blue h-full" src="@/assets/img/transparent.png" alt="ciao" >
>>>>>>> 8e3aa175676adf9f17d66a630d0e16bc6ba7d1c3
    </div>
    <div class="mask-persona" >
      <img class="img-person" :src="img_link" :alt="alt" >
    </div>
  </div>

</template>

<script>
 export default {
      props: [
          'img_link',
          'alt'
      ]
  }
</script>

<style scoped>

.mask-persona {
-webkit-mask-image: url(@/assets/img/image-mask.png);
mask-image: url(@/assets/img/image-mask.png);
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
mask-size: contain;
}
.mask-cornice {
position:absolute;
-webkit-mask-image: url(@/assets/img/image-mask2.png);
mask-image: url(@/assets/img/image-mask2.png);
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
mask-size: contain;
}

.bg-light-blue {
background-color: #bb86fc;
}
</style>