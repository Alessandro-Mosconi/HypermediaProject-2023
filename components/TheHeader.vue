<!--
    Header of the page
-->
<template>
    <header>
        <h1>Space Odyssey Capital</h1> 
        <nav>
            <NuxtLink to = "/">HOME</NuxtLink>
            <NuxtLink to = "/dogs">DOGS</NuxtLink>
            <NuxtLink to = "/locations">LOCATIONS</NuxtLink>
            <NuxtLink to = "/about">ABOUT US</NuxtLink>
            <NuxtLink to = "/contact">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: rgba(255, 166, 0, 0);
        color: whitesmoke;
        padding: 0px 4% 0px 4%;
        display: flex;
        align-items: center;
        width:92%;
        justify-content: space-between;
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>