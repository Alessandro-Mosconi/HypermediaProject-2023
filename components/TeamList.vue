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
    <div  class="people-container">
        <div v-for="p in people" class="people" >
            <ImageCard  :img_link = "p.img_url"/>
            <b>{{p.name + ' ' + p.surname}}</b>
            <div class="role">ROLE</div>
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
    .people-container{
        background-color: whitesmoke;
        width: 100%;
        padding-left: 5%;
        padding-top: 5%;
        padding-right: 5%;
        padding-bottom: 5%;
        color: black;
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
    }
</style>