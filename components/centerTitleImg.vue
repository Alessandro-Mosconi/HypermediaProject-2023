<!--
    Centered title with image background
-->
<template>
    <div class='bigTitle ml-auto mr-auto w-[95%] bg-top md:bg-center-down md:h-full bg-contain md:bg-auto' :style="bgImage + ' ' + customWidth + ' ' + customPos">
        <div class="gradient flex flex-col md:min-h-[50vh] h-full">
            <div class="testo w-[95%] flex flex-col h-full ml-auto mr-auto"> 
                <div class="md:max-w-[75vw] mr-auto ml-auto text-[2.5rem] leading-tight mt-auto mb-auto md:text-8xl lg:text-9xl text-center md:h-auto inline-block align-center">
                    
                <div v-if="subtitle" class="hidden md:visible mt-20">
                
                </div> 
                    {{ title }}   
                <div v-if="subtitle" class="text-2xl uppercase md:text-[3.2rem] lg:text-[3.35rem] md:leading-tight lg:leading-tight  text-center mt-4 md:mt-8 font-ABClight">
                    {{ subtitle }}
                </div> 
                </div>            
                <div v-if="description" class="text-lg md:text-4xl lg:text-5xl  text-justify !leading-snug uppercase inline-block align-baseline">
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
        subtitle: String,
        description: String,
        img: String,
        widthImage: String,
        posImage: String,
    },
    computed: {
        bgImage () {
            return `background-image: url("${this.img}");`;
        },
        customWidth () {
            return `background-size: ${this.widthImage?this.widthImage:'75%'};`;
        },
        customPos () {
            return `background-position: ${this.posImage?this.posImage:'center'};`;
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
    align-items: center 500px;
}

.bigTitle {
    background-repeat: no-repeat;
}

.testo{    
    font-family: bold;
}

</style>