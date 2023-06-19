<!--
    Big text with paragraph on the right
-->

<template>
  <div class="component">
  <div class="div">
    <p>{{ paragraph }}</p>
    <div class="capsule">FIND OUT MORE ↗</div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    paragraph: String,
  },
};
</script>

<style scoped>

.component{
  width:100%;
  display:flex;
  justify-content: flex-end;
}
.div{
   width:45%;
   margin-right: 5%;
   flex-direction:row-reverse;
}

p {
 width:100%;
 font-size: 2vw;
 font-weight:300; 
 text-align:left;
}

.capsule{
   width: 50%;
   justify-content:center; 
   text-align:center; 
   border:solid white 3px; 
   border-radius:50px; 
   text-transform:uppercase; 
   font-weight: 300;
   font-size: 2vw;
   display: inline-block;
}
</style>