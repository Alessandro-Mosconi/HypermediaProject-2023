<template>
    <div class="relative w-full">
        <img class="w-full h-[70vh] object-cover" :src="imageUrl" alt="Banner Image"/>
        <div class="absolute text-[7vh] font-medium leading-[9vh] left-[5vh] bottom-[3vh]">
            WE INVEST IN <br /><span class="text-[#F65933]">{{ area.toUpperCase() }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',
    props: {
        imageUrl: String,
        area: String,
    }
};
</script>