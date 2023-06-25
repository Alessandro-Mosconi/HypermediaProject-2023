<template>
    <div class="relative w-full">
        <img class="w-full h-[70vh] object-cover" :src="imageUrl" alt="Banner Image"/>
        <div class="absolute text-[7vh] font-semibold leading-[8vh] left-[5vh] bottom-[3vh]">
            WE INVEST IN <br />
            <span v-if="areaCode === 'SPACE_MINING'" class="text-[#F65933]">{{ area.toUpperCase() }}</span>
            <span v-if="areaCode === 'SPACE_TOURISM'" class="text-[#7DD2F4]">{{ area.toUpperCase() }}</span>
            <span v-if="areaCode === 'SATELLITES'" class="text-[#BB86FC]">{{ area.toUpperCase() }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',
    props: {
        imageUrl: String,
        area: String,
        areaCode: String
    }
};
</script>