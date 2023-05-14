<!--
    Footer of the page
-->

<template>
    <footer>
        Made by the Codebusters! :)
        <li v-for="p in persone">
            {{ p.name + ' ' + p.surname }}
        </li>
    </footer>

</template>


<script>
    export default defineNuxtComponent({
        async asyncData() {
            // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
            const persone = await $fetch('/api/persone')

            return {
                persone
            }
        }
    })
</script>

<style>
    footer
    {
        background-color: rgba(255, 166, 0, 0);
        flex-shrink: 0;
        text-align: center;
        padding: 10px;
        color: white;
        min-height: 1vh;
    }
</style>