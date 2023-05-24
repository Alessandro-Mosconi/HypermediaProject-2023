<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>
    <div class="card">
        <div class="image-container" :style="bgImage">
            <h1>→</h1>
        </div>
        <NuxtLink :to = "link" ><h3>{{ projectName }}</h3></NuxtLink>
        <NuxtLink :to = "link" ><h4 :style="colorArea" >{{ area }}</h4></NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        projectName: String,
        area: String,
        img: String,
        colorArea: String,
    },
    computed: {
        bgImage () {
        return `background-image: url("${this.img}");`;
        },
        colorArea(){
            return `color: ${this.colorArea};`;  
        }
}
}
</script>

<!-- 
style not scoped so that you change also smallerCardProject.vue
-->

<style>
    .image-container
    {
        display: flex;
        justify-content:right;
        width: 400px;
        height: 250px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card
    {
        font-size: 6vw;
        display: flex;
        flex-flow: column;
        padding: 20px;
        width: fit-content;
        align-items: flex-start;
    }

    .card h1{
        font-family:monospace;
        margin-top: 0;
        margin-right: 10px;
    }


    .card h3
    {
        font-size: 2.5vw;
        font-weight: bold;
        text-transform: uppercase;
        font-weight: 500;
        display:contents;  
    }
    .card h4
    {
        font-size: 1.6vw;
        font-weight: lighter;
        text-transform: uppercase;
        font-weight: 300;
        display:contents;  
    }

    .card h3::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transition: width 0.3s ease-in-out;
}

    .card h3:hover::before {
        width: 100%;
    }

    @media (min-width: 1920px) {
    .card h1 {
    font-size: 3vw;
    }
    .card h3 {
    font-size: 2vw;
    }

    .card h4 {
    font-size: 1vw;
    }
}

</style>
