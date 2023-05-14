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
    <div class="mask1" >
        <img class="img-person" :src="img_link" alt="ciao">
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

.img-person {
  width: 150px; 
  height: 200px; 
  object-fit: cover;
  background-color: gainsboro;
}
</style>