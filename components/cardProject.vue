<template>
    <NuxtLink class="selection" id="about" :to="'/projects/' + projectId">
        <div>
            <div class="relative xl:h-72 h-56 aspect-[1.6/1]">
                <div class="h-full w-full">
                    <button class="absolute top-2 right-2 bg-transparent z-10">
                        <i class="fa-solid fa-arrow-right text-xl"></i>
                    </button>
                    <div class="over-card top-4 left-4 uppercase absolute z-10">
                        {{ hiddenTopElement }}
                    </div>
                    <div class="over-card bottom-4 left-4 lowercase absolute z-10">
                        {{ hiddenBottomElement }}
                    </div>
                    <div class="anti-over-card bottom-4 left-4 uppercase absolute z-10">
                        {{ bottomElement }}
                    </div>
                    <div class="image-card absolute w-full h-full bg-black">
                    </div>
                    <img :src="img" alt="" class=" h-full w-full object-cover"/>
                </div>
            </div>
            <NuxtLink :to="'/projects/' + projectId"><h1 class="text-3xl font-bold mt-4 mb-4 uppercase">{{ projectName }}</h1>
            </NuxtLink>
            <NuxtLink :to="'/areas/' + area">
                <h3 class="text-lg uppercase" :style="{color: getColorByArea(area)} " >{{areaName}}</h3>
            </NuxtLink>
        </div>
    </NuxtLink>
</template>

<script>

import {useColor} from '~/stores/color';

export default {

    data({$pinia}) {
        const areaColors = useColor($pinia).areaColors;

        return {
            areaColors
        }
    },
    props: {
            projectName: String,
            projectId: Number,
            area: String,
            areaName: String,
            img: String,
            hiddenTopElement: String,
            hiddenBottomElement: String,
            bottomElement: String
    },
    methods: {
        getColorByArea(areaCode) {
            const color = this.areaColors.find(row => row.code === areaCode).color || '#FFFFFF';
            return color;
        }
    }
}
</script>


<style scoped>

.selection .image-card {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  opacity: 0;
}
.selection:hover .image-card {
  opacity: 0.5;
}

.selection:hover i{
    transform: rotate(-45deg);
}

i { 
    transition: transform ease 0.5s;
}
.over-card {
    transition: all ease 0.5s;
    opacity: 0;
}
.anti-over-card {
    transition: all ease 0.5s;
    opacity: 1;
}

.selection:hover .anti-over-card{
    opacity: 0;
}
.selection:hover .over-card{
    opacity: 1;
}

</style>