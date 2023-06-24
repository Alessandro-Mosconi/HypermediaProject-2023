<!--
    Header of the page
-->
<template>
        <div class="ml-[5%] mr-[5%] md:text-[4rem] md:leading-snug text-2xl"><text>
            {{ longtext }} 
        </text></div>
</template>

<script>
export default{
    props: {
        longtext: String
    }
}
</script>

<style>
    text{
        margin-top: 5vw;
        display: inline-block;
        color: whitesmoke;
        width:100%;
        font-family: Bold;
        text-transform: uppercase;
    }
</style>