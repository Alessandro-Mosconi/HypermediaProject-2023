<template>
    <div class="mask2 pos-abs" >
        <img class="mask2 bg-blue-big" src="@/assets/img/transparent.png" alt="ciao" >
    </div>
    <div class="mask2 pos-abs" >
        <img class="mask2 bg-black-big" src="@/assets/img/transparent.png" alt="ciao" >
    </div>
    <div v-if="false" class="img-profile-person pos-abs" >
        <img class="img-profile-person" :src="img_link" alt="ciao" >
    </div>
 
</template>

<script>
   export default {
        props: [
            'img_link'
        ]
    }
</script>


<style>
.mask2 {
  -webkit-mask-image: url(@/assets/img/mask2.png);
  mask-image: url(@/assets/img/mask2.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
}
.pos-abs{
    position: absolute;
}

.center-big{
  margin-left: .7%;
  margin-top: .8%;
  z-index: 1;
}

.img-profile-person {
  width: 200px; 
  background-color: #121212;
  object-fit: cover;
  z-index: 2;
}
.bg-blue-big {
  background-color: #bb86fc;
  height: 250px; 
  z-index: 0;
}
.bg-black-big {
  background-color: orange;
  height: 240px; 
  z-index: 1;
}
</style>