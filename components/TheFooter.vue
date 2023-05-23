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
        <h2>striving to ignite possibilities</h2>
    </footer>
</template>

<style scoped>
p {
    padding: 3em 0 0 0;
    font-size: 1.3em;
}

h2 {
    font-size: 5em;
    font-weight:600;
    text-transform: uppercase;
    text-align:center;
}

footer {
    background-color: rgb(0, 0, 0);
    /*flex-shrink: 0;*/
    text-align: left;
    padding: 5em 3em;
    color: white;
    min-height: 1vh;
    border-top: 4px solid white;
}

table {
    /* make the table wide as its parent */
    width: 100%;

}

td {
    font-size: 1.3em;
}
</style>