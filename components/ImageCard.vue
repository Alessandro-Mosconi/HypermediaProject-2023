<template>
  <div class="relative">
    <div class="mask-cornice absolute h-full z-10" >
        <img class="h-full" :style="bgColor" src="@/assets/img/transparent.png" alt="ciao" >
    </div>
    <div class="mask-persona h-full " >
      <img class="img-person h-full w-full" :src="img_link" :alt="alt" >
    </div>
  </div>
</template>

<script>
 export default {
      props: {
          img_link: String,
          alt: String,
          color: String
      },
    computed: {
        bgColor () {
        return `background-color: ${this.color? this.color : '#bb86fc'};`;
        }
      }
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