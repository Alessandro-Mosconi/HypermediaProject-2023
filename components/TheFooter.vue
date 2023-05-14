<!--
    Footer of the page
-->

<template>
    <footer>
        <table>
            <tr>
                <td>venture.agency@mail.com</td>
                <td>Cookies</td>
            </tr>
            <tr>
                <td>+39 333 12345678</td>
                <td>Privacy</td>
            </tr>
            <tr>
                <td>+39 333 12345678</td>
            </tr>
        </table>
        <p>© 2023 Capital Ventures</p>
        <h2>LOREM IPSUM DOLOR SIT AMET LOREM IPSUM</h2>
        <!-- <li v-for="p in persone">
            {{ p.name + ' ' + p.surname }}
        </li>
        <p>Made by the Codebusters! :)</p> -->
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
p {
    padding: 3em 0 0 0;
    font-size: 1.3em;
}

h2 {
    font-size: 3em;
}

footer {
    background-color: rgb(0, 0, 0);
    /*flex-shrink: 0;*/
    text-align: left;
    padding: 5em 3em;
    color: white;
    min-height: 1vh;
}

table {
    /* make the table wide as its parent */
    width: 100%;

}

td {
    font-size: 1.3em;
}
</style>