<!--
    Area card component
-->
<template>
    <main>
        <div class="card">
            <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg" class="image">
            <h2 class="text">{{ title }}</h2>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        title: String,
        image: String,
    },
}
</script>


<style>
main {
    width: 100%;
    position: relative;
}

.card {
    font-size: 3em;
    font-family: Bold;
    text-align: center;
    background-color: purple;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    height: 100%;
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text {
    color: white;
    z-index: 1;
}
</style>