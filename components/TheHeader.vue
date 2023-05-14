<!--
    Header of the page
-->
<template>
    <header>

        <NuxtLink to="/">
            <img class="logo" src="@/assets/img/CELESTA_WHITE.png" alt="pace Odyssey Capital">
        </NuxtLink>
        <h1>Celesta Capital</h1>
        <nav>
            <NuxtLink to="/">ABOUT</NuxtLink>
            <NuxtLink to="/dogs">TEAM</NuxtLink>
            <NuxtLink to="/locations">PROJECTS</NuxtLink>
            <NuxtLink to="/about">INVESTEMENT AREAS</NuxtLink>
            <NuxtLink to="/contact">CONTACTS</NuxtLink>
        </nav>
    </header>
</template>

<style>
header {
    /* margin-top: 2%;
    margin-bottom: 2%; */
    font-family: ABCWhyteLight;
    /* background-color: rgb(255, 166, 0); */
    color: whitesmoke;
    padding: 0px 4% 0px 4%;
    display: flex;
    align-items: center;
    width: 92%;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    backdrop-filter: blur(10px);
    
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