<!--
    Big text with paragraph on the right
-->
<template>
    <div>
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
  
  p {
     width:45%;
     text-align: left;
     margin-left:5%;
     font-size: 3vw;
     font-weight: 500;
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