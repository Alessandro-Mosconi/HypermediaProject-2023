<!--
    Centered title with image background
-->
<template>
    <container class='bigTitle' :style="bgImage">
        <div class="texts"> 
            <div class="title">
                <h1>{{ this.title }}</h1>
            </div>
            <h3>{{ this.description }}</h3>
        </div>
    </container>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        img: String
    },
    computed: {
        bgImage () {
        return `background-image: url("${this.img}");`;
  }
}
}
</script>


<style>

.bigTitle {
    width: 100%;
    position: relative;
    height: 60em;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}


.texts {
   position: absolute;
   color: white;
   font-size: 2em; 
   font-family:bold; 
   text-align:center; 
   width :90%;  
}


.texts h3 {
    font-size : 1.5em ;
    line-height:.9em ;    
    text-align:justify ;
}
</style>