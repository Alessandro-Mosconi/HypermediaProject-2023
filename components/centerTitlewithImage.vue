<!--
    Centered title with image background
-->
<template>
    <main>
        <img src="@/assets/img/home_planet_tmp.png" />
        <div class="centeredTitle">
            <div class="title">
                <h1>{{ this.title }}</h1>
            </div>
            <h3>{{ this.description }}</h3>
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

.centeredTitle {
    position: absolute;
    color: white;
    font-size: 2.2em;
    font-family: bold;
    text-align: center;
    /* background-color: darkorange; */
    width: 95%;
}

.title {
    /* background-color: purple; */
    margin: 0 15%;
    line-height: 2em;
}

h3 {
    font-size: 1.5em;
    line-height: 0.8em;
    text-align: justify;

}
</style>