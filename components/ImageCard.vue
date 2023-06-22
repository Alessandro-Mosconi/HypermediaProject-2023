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
    <div class="mask-cornice-1 pos-abs" >
      <!-- TODO: inserire color come attributo in bg -->
        <img class="bg-[green] w-[302px] h-[360px]" src="@/assets/img/transparent.png" alt="ciao" > 
    </div>
    <div class="mask-persona" >
        <img class="img-person" :src="img_link" :alt="alt" >
    </div>
 
</template>

<script>
   export default {
        props: [
            'img_link',
            'alt',
            'color'
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
.mask-cornice-1 {
  -webkit-mask-image: url(@/assets/img/image-mask2.png);
  mask-image: url(@/assets/img/image-mask2.png);
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
  padding-top: 18px;
  width: 300px; 
  height: 340px; 
  object-fit: cover;
}
</style>