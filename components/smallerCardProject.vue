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
        <NuxtLink :to = "link" ><h3> {{ projectName }} </h3></NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        projectName: String,
        img: String
    },
    computed: {
        bgImage () {
        return `background-image: url("${this.img}");`;
  }
}
}
</script>

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

    .card h1{
        font-family:monospace;
        font-size: 6em;
        font-weight: lighter;
        margin-top: 0;
        margin-right: 10px;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border: 2px solid black;
        border-radius: 20px;
        width: fit-content;
    }

    .card h3
    {
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
        font-weight: 500;
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

</style>
