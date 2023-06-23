<template>
  <div class="relative">
    <div class="mask-cornice absolute h-full" >
      <img class="bg-light-blue h-full ml-auto mr-auto" src="@/assets/img/transparent.png" alt="ciao" >
    </div>
    <div class="mask-persona z-10" >
      <img class="img-person ml-auto mr-auto" :src="img_link" :alt="alt" >
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
top:.4em;
position:absolute;
-webkit-mask-image: url(@/assets/img/cornice-maschera-2.png);
mask-image: url(@/assets/img/cornice-maschera-2.png);
-webkit-mask-repeat: no-repeat;
mask-repeat: no-repeat;
mask-size: contain;
}

.bg-light-blue {
background-color: #bb86fc;
}
</style>