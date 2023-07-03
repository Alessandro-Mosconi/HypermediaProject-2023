<!--
    Centered title with image background
-->
<template>
    <main>
        <div class="brightness-50 absolute filter lg:top-[10%] md:mr-[35%]  xl:mr-[50%] ">
            <img :style="customWidth" src="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/image%2012.png"/>   
        </div>
                 
        <div class="centerText z-20 mr-3 ml-3 w-[85%] md:w-[90%] lg:w-[95%]">
            <div class="centerTitle w-4/5 md:w-1/2 text-4xl md:text-7xl text-center lg:text-8xl">
                <div>{{ title }}</div>
            </div>
            <div v-if="true" class="centerDescription text-lg md:text-4xl text-center lg:text-5xl">
                <div>{{ description }}</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        widthImage: String,
    },
    computed: {
        customWidth () {
        return `width: ${this.widthImage?this.widthImage:'50em'};`;
        }
  }
}
</script>



<style scoped>
.centerText {
    z-index: 1;
    color: white;
    font-family: bold;
    text-align: center;
    line-height: 0.9em;
}

.centerTitle {
    margin-top: 15%;
    margin-bottom: 10%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.2em;
}

.centerDescription {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.2;
    justify-content: center;
    text-align: justify ;
}

</style>