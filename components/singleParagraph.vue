<!--
    Big text with paragraph on the right
-->
<template>
    <div class="component">
      <p>{{ paragraph }}</p>
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
  .component {
    display: flex;
  }
  
  p {
     width:40%;
     margin-left:10%;
     font-size: 3em;
     font-weight: 500;
     /* Keep this element always on the left */
     justify-self:flex-start;
  }
  
  @media only screen and (max-width :1200px) {  
   .component{
       flex-direction : column
   }
   p{
       text-align:left;
       margin-left:10%;
   } 
  }
  </style>