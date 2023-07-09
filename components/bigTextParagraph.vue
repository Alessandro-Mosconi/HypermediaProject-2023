<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component mt-10">
    <div class="z-[1] big-text md:text-6xl text-xl md:uppercase">{{ bigText }}</div>
    <div class="paragraph-section">
        <div class="md:text-xl text-sm md:mt-0 mt-3">
            {{ paragraph }}
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        bigText: String,
        paragraph: String,
    }
}
</script>

<style scoped>
.component {
  display: flex;
  justify-content:center;
}

.big-text {
  margin-right: auto;
  margin-left: 10%;
  text-align:left;
  width:40%;
  white-space: nowrap;
}

.paragraph-section {
   width:40%;
   margin-right:10%;
}

.paragraph-section p{
    margin-top:0px; 
    padding-top:10px; 
}

@media only screen and (max-width :1200px) {  
 .component{
     flex-direction : column
 }
 .big-text{
     text-align:left
 }
 .paragraph-section{
     width :80%;
     margin-right: 10%;
     margin-left: 10%;
 }   
}
</style>