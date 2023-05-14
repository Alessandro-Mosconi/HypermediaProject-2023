<!--
    Header of the page
-->
<template>
    <header>
        
        <NuxtLink to = "/">
            <img class="logo" src="@/assets/img/rocket.png" alt="pace Odyssey Capital">
        </NuxtLink>
        <h1>Space Odyssey Capital</h1> 
        <nav>
            <NuxtLink to = "/">HOME</NuxtLink>
            <NuxtLink to = "/dogs">DOGS</NuxtLink>
            <NuxtLink to = "/locations">LOCATIONS</NuxtLink>
            <NuxtLink to = "/about">ABOUT US</NuxtLink>
            <NuxtLink to = "/contact">CONTACT US</NuxtLink>
            <NuxtLink to = "/persone">PERSONE</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        margin-top: 2%;
        margin-bottom: 2%;
        font-family: ABCWhyteLight;
        background-color: rgba(255, 166, 0, 0);
        color: whitesmoke;
        padding: 0px 4% 0px 4%;
        display: flex;
        align-items: center;
        width:92%;
        justify-content: space-between;
    }

    .logo {
        height: 45px;
        width: 45px;
        margin-right: 15px;
    }

    nav {
        margin-left: auto;
        margin-right: auto;
    }

    a {
        font-size: 0.6em;
        margin: 0 15px;
    }

    a:first-of-type {
        margin-left: 0;
    }

    a:last-of-type {
        margin-right: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    @font-face {
        font-family: 'ABCWhyteLight';
        src: url('@/assets/fonts/ABCWhyte/ABCWhyte-Extralight-Trial.otf') format('truetype');
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>