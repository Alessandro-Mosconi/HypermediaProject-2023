<!--
    Default layout used by all the page
-->
<template>
    <Head>
        <Title>Celesta Capital</Title>
    </Head>
    <div>
        <TheHeader />
        <div class = 'page'>
            <slot />
        </div>
        <TheFooter />
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .page {
        min-height: 100vh;
        background-color:#121212;
    }

    h1 {
        font-size: 6vw;
    }

    p {
        padding: 3em 0 0 0;
        font-size: 1.3em;
    }
    
</style>