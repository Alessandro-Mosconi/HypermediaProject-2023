<!--
    Centered title with image background
-->
<template>
    <main>
        <div class="back-img zoom">
            <img src="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/image%2012.png"/>   
        </div>
                 
        <div class="centerText">
            <div class="centerTitle">
                <h1>{{ this.title }}</h1>
            </div>
            <div class="centerDescription">
                <h3>{{ this.description }}</h3>
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
    mounted() {
        const zoomElement = document.querySelector(".zoom");
        let zoom = 1;
        const ZOOM_SPEED = 0.01;

        document.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            if(zoom <1.5){
            zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`; }
        } else {
            if(zoom>1){
                zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
            }
        }
        });
    },
}
</script>


<style>

.zoom {
}

.back-img {
    position: absolute;
    top: 10%;
    margin-right: 50%;
    margin-left: 5%;
    margin-left: 5%;
    filter: brightness(50%);
}

.back-img img {
    width: 650px;
}

.centerText {
    z-index: 1;
    color: white;
    font-family: bold;
    text-align: center;
    line-height: 0.9em;
    width: 95%;
    height: 10%;
}

.centerTitle {
    margin-top: 15%;
    margin-bottom: 10%;
    font-size: 4em;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    line-height: 2em;
}

.centerDescription {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    line-height: 2em;
    font-size: 2.6em;
}

h3 {
    line-height: 0.9em;
    text-align: justify;

}
</style>