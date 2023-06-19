<!--
    Area card component
-->
<template>
    <main>
        <div class="area-component">
            <div class="text-div">
                <tit>{{ title }}</tit>
                <div></div>
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

.area-component {
    display: flex;
    justify-content: center;
    align-items: center;        
    height: 53em;   
    width: 100%;    
    background-color: #acacac;
    background-image: url("https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    border-radius: 50px 50px 0 0;
    box-shadow: 0px 0px 50px #000000;
}

.text-div {
    z-index: 1;
    text-align: center;
    margin: 0px;
}

tit {
    margin: 0 0;
    font-size: 8em;
    font-family: Bold;
    line-height: 1.2em;
    /* background-color: blueviolet; */
}

#descr {
    font-size: 2.5em;
    margin: 0 0;
    /* background-color: purple; */
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