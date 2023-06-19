<!--
    Centered title with image background
-->
<template>
    <div class="singleItem" :style="bgImage">
        <div class="capsule"> our investment areas ↗</div>
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
.singleItem {
    width: 100%;
    position: relative;
    height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content: flex-end; 
    align-items: flex-end; 
}


.capsule{
    justify-content: center;
    text-align: center;
    border: solid white 3px;
    border-radius: 25px; 
    text-transform: uppercase;
    font-size: 2.5vw;
    font-weight: normal;
    align-self:flex-end;
    margin-bottom: 1em;
    display: inline-block;
    margin-right: 60%; 
    padding-left:.75em; 
    padding-right:.75em;
}
</style>