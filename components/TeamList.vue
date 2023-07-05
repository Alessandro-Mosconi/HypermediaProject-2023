<template>
    <div  class="selection flex flex-wrap">
        <div v-for="p in people" class="lg:basis-72 sm:basis-52 basis-32 justify-center ml-auto mr-auto mb-5" >
            <div>
                <NuxtLink id="about" class="pg" :to='"/team/"+p.id'>
                    <ImageCard class="" :img_link = "p.img_url" :alt = "p.name + ' ' + p.surname" />
                </NuxtLink>
                <div class="mt-2 lg:text-lg text-xs sm:text-sm mb-0.5"><b >{{p.name + ' ' + p.surname}}</b></div>
                <div class="role lg:text-lg text-2xs sm:text-sm mb-0.5">{{ p.role }}</div>
            </div>
            <div class="">
                <NuxtLink id="about" class="pg" :to='"/team/"+p.id'>
                    <i class="fa-solid fa-arrow-right text-sm sm:text-2xl "></i>
                </NuxtLink>
            </div>
        </div>
    </div>
 
</template>

<script>
   export default {
        props: [
            'people'
        ]
    }
</script>


<style scoped>
.selection :hover i {
    transform: translateX(25%);
}

i{
    transition: all 0.5s ease;
    transform: translateX(0%);
}

    .arrow-icon{
        font-size: large!important;
    }
    .role{
    font-family: ABCWhyteLight;
    }
</style>