<!--
    Centered title with image background
-->
<template>
    <container class="threeItems" :style="bgImage">
    <container class="innerContainer">
        <div class="capsules"> innovation</div>
        <div class="capsules"> collaboration</div>
        <div class="capsules"> impact</div>
    </container>
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
.threeItems {
    width: 100%;
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.innerContainer {
    width: 90%;  
    margin-left: 5%;
    position: relative;
    height: 100%;
    display:flex; 
    justify-content: space-between; 
}

.capsules{
    justify-content: center;
    text-align: center;
    border: solid white 3px;
    border-radius: 25px;
    width: auto;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: normal;
    align-self:flex-end;
    margin-bottom: 1em;
    display: inline-block;
    padding-left:0.75em; 
    padding-right:0.75em;
}
</style>