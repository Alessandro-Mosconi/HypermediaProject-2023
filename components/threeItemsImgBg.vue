<!--
    Centered title with image background
-->
<template>
    <div class="threeItems relative" :style="bgImage">
        <div class="flex md:flex-row flex-col uppercase md:text-3xl text-lg absolute inset-x-0 md:bottom-5 bottom-32">
            <div class="mr-auto ml-auto md:basis-1/3 basis-full mb-14">
                <div class="mx-5 w-fit md:w-auto md:flex justify-center items-center p-4 rounded-full md:border-4 border-2 border-white ">
                    <div class="leading-none max-w-full flex-initial">innovation</div>
                </div>
            </div>
            <div class="mr-auto ml-auto md:basis-1/3 basis-full mb-14">
                <div class="mx-5 w-fit md:w-auto md:flex justify-center items-center p-4 rounded-full md:border-4 border-2 border-white ">
                    <div class="leading-none max-w-full flex-initial">collaboration</div>
                </div>
            </div>
            <div class="mr-auto ml-auto md:basis-1/3 basis-full">
                <div class="mx-5 w-fit md:w-auto md:flex justify-center items-center p-4 rounded-full md:border-4 border-2 border-white ">
                    <div class="leading-none max-w-full flex-initial">impact</div>
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
        return `background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${this.img}");`;
  }
}
}
</script>


<style>
.threeItems {
    width: 100%;
    height: 85vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>