<!--
    Centered title with image background
-->
<template>
    <div class='bigTitle ml-auto mr-auto w-[95%]' :style="bgImage">
        <div class="gradient ">
        <div class="testo"> 
            <div class="mb-[15%] text-6xl md:text-8xl lg:text-9xl  text-center">
                <div>{{ title }}</div>
            </div>
            <div class=" text-2xl md:text-4xl text-center lg:text-5xl md:text-justify leading-relaxed uppercase">
                {{ description }}
            </div>
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
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bigTitle {
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: center -.1%;
}

.testo{    
    font-family: bold;
}

</style>