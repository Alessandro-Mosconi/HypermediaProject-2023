<!--
    Centered title with image background
-->
<template>
    <main>
        <div class="back-img">
            <img src="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/image%2012.png"/>   
        </div>
                 
        <div class="centerTitle">
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

.back-img {
    position: absolute;
    margin-right: 50%;
    margin-left: 5%;
    float: left;
    filter: brightness(50%);
}

.back-img img {
    width: 700px;
}

.centerTitle {
    z-index: 1;
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
    margin: 3em 0;
    font-size: 1.5em;
    line-height: 0.9em;
    text-align: justify;

}
</style>