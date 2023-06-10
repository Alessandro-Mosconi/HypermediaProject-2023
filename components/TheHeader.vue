<!--
    Header of the page
-->
<template>
    <header>
        <NuxtLink to="/">
            <img class="logo" src="@/assets/img/CELESTA_WHITE.png" alt="Celesta Capital">
        </NuxtLink>
        <name>Celesta Capital</name>
        <nav>
            <NuxtLink id="about" class="pg" to="/">HOME</NuxtLink>
            <NuxtLink id="about" class="pg" to="/about">ABOUT</NuxtLink>
            <NuxtLink id="team" class="pg" to="/team">TEAM</NuxtLink>
            <NuxtLink id="projects" class="pg" to="/projects">PROJECTS</NuxtLink>
            <NuxtLink id="areas" class="pg" to="/areas">INVESTMENT AREAS</NuxtLink>
            <NuxtLink id="contacts" class="pg" to="/contact">CONTACTS</NuxtLink>
        </nav>
    </header>   
</template>

<style scope>
header {
    height: 5vw;
    font-family: ABCWhyteLight;
    color: rgb(255, 255, 255);
    padding: 0px 4% 0px 4%;
    display: flex;
    align-items: center;
    width: 92%;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.322);
    
}

name {
    font-size: 1.8vw;
    font-family: Bold;
}

.logo {
    height: 35px;
    width: 35px;
    margin-right: 25px;
    display: flex;
    align-items: center;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    font-size: 1em;
}

a {
    font-size: 1vw;
    margin: 0 40px;
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
}

a:first-of-type {
    margin-left: 0;
}

a:last-of-type {
    margin-right: 0;
}

/* a:active {
    color: rgb(255, 102, 0);
} */

.pg::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transition: width 0.3s ease-in-out;
}

.pg:hover::before {
  width: 100%;
}

@font-face {
    font-family: 'ABCWhyteLight';
    src: url('@/assets/fonts/ABCWhyte/ABCWhyte-Extralight-Trial.otf') format('truetype');
}
</style>