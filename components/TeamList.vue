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
        <div v-for="p in people" class="basis-72 group-last:ml-10 justify-center ml-auto mr-auto" >
            <ImageCard :img_link = "p.img_url" :alt = "p.name + ' ' + p.surname"/>
            <div class="mt-5"><b >{{p.name + ' ' + p.surname}}</b></div>
            <div class="role">{{ p.role }}</div>
            <div class="mb-5">
                <NuxtLink id="about" class="pg" :to='"/team/"+p.id'><i class="fa-solid fa-arrow-right" style="font-size: 30px;"></i></NuxtLink>
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


<style>
    .people-div{
        color: white;
    }

    b{
        margin-top: 0px;
        padding-top: 0px;
    }

    .role{
    font-family: ABCWhyteLight;
    }

    .people{
        display: inline-table;
        margin-left: 20px;
        margin-top: 20px;
    }
</style>