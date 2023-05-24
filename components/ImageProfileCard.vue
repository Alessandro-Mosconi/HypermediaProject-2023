<template>
  <div>
    <div class="mask-persona-2" >
        <img  :src="img_link" alt="ciao" >
    </div>
  </div>
</template>

<script>
 export default {
      props: [
          'img_link'
      ]
  }
</script>


<style scoped>
.mask-persona-2 {
  -webkit-mask-image: url(@/assets/img/image-mask.png);
  mask-image: url(@/assets/img/image-mask.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
  
  background-image: url(@/assets/img/cornice-maschera-2.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: fit-content;
}
.mask-persona-2 img {
  width: 100%;
  height: 120%;
  object-fit: cover;
}
</style>