<!--
    Area card component
-->
<template>
    <main>
        <div class="card">
            <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg" class="image">
            <div class="text-container">
                <h2 class="text">{{ title }}</h2>
                <p class="text">{{ description }}</p>
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

.card {
    text-align: center;
    background-color: purple;
    display: flex;
    align-items: center;
    width: 100%;
    height: 25em;
}

.image-container {
    position: absolute;
    width: 100%;
    height: 100%;
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    background-color: black;
    filter: brightness(0.5);
    border-radius: 50px;
    box-shadow: 0px -10px 40px rgba(0, 0, 0, 0.555);
    height: 50em;
}

.text-container {
    font-size: 2em;
    background-color: orange;
    color: white;
    z-index: 1;
    line-height: 0.4em;
}

p {
    font-style: normal;
}
</style>