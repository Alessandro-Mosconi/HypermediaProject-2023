<!--
    Centered title with image background
-->
<template>
    <div class='bigTitle ml-auto mr-auto w-[95%] bg-top md:bg-center-down' :style="bgImage">
        <div class="gradient md:min-h-[50vh]">
        <div class="testo w-[95%]"> 
            <div class="mb-[15%] md:mt-[5%] text-4xl md:text-8xl lg:text-9xl mt-[25%] text-center">
                <div>{{ title }}</div>
            </div>            
            <div class=" text-lg md:text-4xl lg:text-5xl text-justify leading-relaxed uppercase">
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
    background-image: linear-gradient(transparent, #121212); 
    width: 100%;
    position: relative;
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
}

.testo{    
    font-family: bold;
}

</style>