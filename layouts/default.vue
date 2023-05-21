<!--
    Default layout used by all the page
-->
<template>
    <head>
        <title>Celesta Capital</title>
    </head>
    <div>
        <TheHeader />
        <div class = 'page'>
            <slot />
        </div>
        <TheFooter />
    </div>
</template>

<style>
    .page {
        min-height: 100vh;
        width:100%;
        background-color: #121212;
        position: relative;
    }

    h1 {
        font-size: 2em;
    }

    p {
        font-size: 1.2em;
    }


</style>