<template>
    <div class="relative w-full">
        <img class="w-full h-[70vh] object-cover" :src="imageUrl" alt="Banner Image"/>
        <div class="absolute font-semibold leading-[8vh] left-[5vh] bottom-[3vh] md:mt-[5%] text-2xl md:text-5xl lg:text-7xl mt-[25%]">
            WE INVEST IN <br />
<!--            TODO: add condition with pinia -->
            <span v-if="areaCode === 'SPACE_MINING'" class="text-[#F65933]">{{ area.toUpperCase() }}</span>
            <span v-if="areaCode === 'SPACE_TOURISM'" class="text-[#7DD2F4]">{{ area.toUpperCase() }}</span>
            <span v-if="areaCode === 'SATELLITES'" class="text-[#BB86FC]">{{ area.toUpperCase() }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        area: String,
        areaCode: String
    }
};
</script>