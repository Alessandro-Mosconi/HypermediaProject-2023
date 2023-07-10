<template>
    <div :class="{ 'mr-[5%] z-[1] flex flex-row-reverse': isRight, 'z-[1] ml-[5%] flex flex-row text-left': isLeft}" >
      <div :class="{'ml-auto mr-auto text-center': isCenter}" class="z-[1]  w-[90%] md:w-[45%] text-2xl md:text-6xl font-medium">{{ title }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
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