<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - persona_id: main information to display
    - desc: second information to display
    - link: link to the page description
-->
<template>
    <div class="mask1 pos-abs" >
        <img class="bg-black" src="@/assets/img/transparent.png" alt="ciao" >
    </div>
    <div class="mask1 center" >
        <img class="img-person" :src="img_link" alt="ciao" >
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

.img-person {
  width: 300px; 
  height: 360px; 
  object-fit: cover;
  background-color: #121212;
}
.bg-black {
  background-color: #bb86fc;
  width: 302px; 
  height: 360px; 
}
</style>