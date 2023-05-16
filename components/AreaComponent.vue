<!--
    Area card component
-->
<template>
    <main>
        <div class="area-component">
            <div class="image-container">
                <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg" alt="background image" />
            </div>
            <div class="text-container">
                <h2>{{ title }}</h2>
                <descr id="descr">{{ description }}</descr>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    },
}
</script>


<style>
main {
    width: 100%;
    position: relative;
}

.area-component {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55em;
    width: 100%;
    background-color: blue;
}

.image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: salmon;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
    background-color: aqua;
}

.text-container {
    z-index: 1;
    text-align: center;
    /* @TODO: fix this */
    background-color: green;
    
}

h2 {
    margin: 0 0;
    font-size: 7em;
    line-height: 1.2em;
    background-color: blueviolet;
}

#descr {
    font-size: 2em;
    margin: 0 0;
    background-color: purple;
}

#descr::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transition: width 0.3s ease-in-out;
}

#descr:hover::before {
  width: 100%;
}
</style>