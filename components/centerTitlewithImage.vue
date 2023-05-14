<!--
    Centered title with image background
-->
<template>
    <main>
        <img src = "~/assets/img/home_planet_tmp.png"/>
        <div class="centeredTitle">ABOUT US</div>
    </main>
</template>

<style>
    main {
        width: 100%;
        position: relative;
    }

    .centeredTitle{
        position: absolute;
        color: white;
        font-size: 1000%;
        font-family: bold;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>