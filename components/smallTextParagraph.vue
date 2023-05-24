<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component">
    <div class="small-text">{{ smallText }}</div>
    <div class="paragraph-section">
        <p>
            {{ paragraph }}
        </p>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        smallText: String,
        paragraph: String,
    }
}
</script>

<style scoped>
.component {
  display: flex;
}

.small-text {
  text-align:left;
  width: 30%;  
  white-space: nowrap;
  font-size: 1.5em;
}

p {
  font-size: 1.2em!important;
}

.paragraph-section {
   width:60%;
  font-size: 1em!important;
  margin-right: 2em;
}
.paragraph-section p{
    margin-top:0px; 
    padding-top:10px; 
}

@media only screen and (max-width :55em) {  
 .component{
     flex-direction : column
 }
 .small-text{
     text-align:left
 }
 .paragraph-section{
    margin-top: 2em;
     width :80%;
 }   
}
</style>