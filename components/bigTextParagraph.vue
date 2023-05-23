<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component">
    <div class="big-text">{{ bigText }}</div>
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
        bigText: String,
        paragraph: String,
    }
}
</script>

<style>
.component {
  display: flex;
  justify-content:center;
}

.big-text {
  font-size: 4em; /* adjust size as needed */
  margin-right: auto;
  margin-left: 10%;
  text-align:left;
  width:40%;
  white-space: nowrap;
  text-transform: uppercase;
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