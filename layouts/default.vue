<!--
    Default layout used by all the page
-->
<template>
    <head>
        <title>Space Odyssey Capital</title>
    </head>
    <div class = 'page'>
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<style>
    .page {
        font-family: ABCWhyte;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgb(0, 0, 0);
        margin: 0;
    }

    @font-face {
        font-family: 'ABCWhyte';
        src: url('@/assets/fonts/ABCWhyte/ABCWhytePlusVariable-Trial.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Bold';
        src: url('@/assets/fonts/ABCWhyte/ABCWhyteInktrap-Bold-Trial.otf') format('truetype');
    }

    h1 {
        font-size: 2em;
    }

    p {
        font-size: 1.2em;
    }


</style>