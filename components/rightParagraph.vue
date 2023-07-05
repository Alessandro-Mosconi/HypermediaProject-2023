<template>
  <div :class="{ 'md:mr-[5%] md:flex md:flex-row-reverse ml-[5%] flex flex-row text-left': isRight, 'ml-[5%] flex flex-row text-left': isLeft}" >
      <div :class="{'ml-auto mr-auto text-center': isCenter}" class="w-[90%] md:w-[45%] text-xs md:text-3xl font-light">
        <div class="md:mb-10 mb-5">
          {{ paragraph }}
        </div>
        <Chip v-if="isChip" :link="getLink" :isButton="true" :text="chipText"/>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    paragraph: String,
    chipText: String,
    chipLink: String,
    position: String
  },
  computed: {
    getLink () {
      if(!this.chipLink) {
          return '';
        }
        return this.chipLink;
    },
    isChip () {
      if(!!this.chipText) {
          return true;
        }
        return false;
    },
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