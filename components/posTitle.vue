<template>
    <div :class="{ 'mr-[5%] flex flex-row-reverse': isRight, 'ml-[5%] flex flex-row text-left': isLeft}" >
      <div :class="{'ml-auto mr-auto text-center': isCenter}" class="w-[90%] md:w-[45%] text-2xl md:text-6xl font-medium">{{ paragraph }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      paragraph: String,
      position: String
    },
    computed: {
        isRight () {
          if(this.position === 'right') {
            return true;
          }
          return false;
        },
        isLeft () {
        if(!this.position){
          return true;
        }
          if(this.position === 'left') {
            return true;
          }
          return false;
        },
        isCenter () {
          if(this.position === 'center') {
            return true;
          }
          return false;
        }
      }
  };
  </script>
  
  <style scoped>
  
  </style>