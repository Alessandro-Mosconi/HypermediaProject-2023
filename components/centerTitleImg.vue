<!--
    Centered title with image background
-->
<template>
    <div class='bigTitle' :style="bgImage">
        <div class="gradient">
        <div class="texts"> 
            <div class="title">
                <h1>{{ title }}</h1>
            </div>
            <h3>{{ description }}</h3>
        </div>
    </div>
    </div>
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


<style scoped>

.gradient{
    background-image: linear-gradient(to bottom, transparent 50%, #121212); 
    width: 100%;
    position: relative;
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bigTitle {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}


.texts {
   position: absolute;
   color: white;
   font-size: 2em; 
   font-family:bold; 
   text-align:center; 
   width:90%; 
}

.title h1 {
  font-size: 250px;
}

@media (max-width: 1920px) {
  .title h1 {
    font-size: 10vw;
  }
}

.texts h3 {
    font-size : 2em ;   
    text-align: justify ;
    text-transform: uppercase;
}
</style>