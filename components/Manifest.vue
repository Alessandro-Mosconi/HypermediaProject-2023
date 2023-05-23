<!--
    Header of the page
-->
<template>
        <text>
            {{ longtext }} 
        </text>
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
        font-size: 4vw;
        display: inline-block;
        color: whitesmoke;
        width:100%;
        font-family: Bold;
        text-transform: uppercase;
    }
</style>