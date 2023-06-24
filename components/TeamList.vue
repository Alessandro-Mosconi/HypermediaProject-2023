<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - persona_id: main information to display
    - desc: second information to display
    - link: link to the page description
-->
<template>
    <div  class="flex flex-wrap">
        <div v-for="p in people" class="lg:basis-72 sm:basis-52 basis-32 justify-center ml-auto mr-auto mb-5" >
            <div>
                <NuxtLink id="about" class="pg" :to='"/team/"+p.id'>
                    <ImageCard :img_link = "p.img_url" :alt = "p.name + ' ' + p.surname" :color="'#FFA500'"/>
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
    .arrow-icon{
        font-size: large!important;
    }
    .role{
    font-family: ABCWhyteLight;
    }
</style>