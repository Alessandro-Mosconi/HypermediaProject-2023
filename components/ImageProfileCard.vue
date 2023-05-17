<template>
    <div class="mask1 pos-abs" >
        <img class="bg-black" src="@/assets/img/transparent.png" alt="ciao" >
    </div>
    <div class="mask1 center" >
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
.mask1 {
  -webkit-mask-image: url(@/assets/img/image-mask.png);
  mask-image: url(@/assets/img/image-mask.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
}
.pos-abs{
    position: absolute;
}

.center{
  margin-left: .7%;
  margin-top: .8%;
}

.img-profile-person {
  width: 300px; 
  height: 360px; 
  object-fit: cover;
}
.bg-black {
  background-color: #bb86fc;
  width: 302px; 
  height: 360px; 
}
</style>