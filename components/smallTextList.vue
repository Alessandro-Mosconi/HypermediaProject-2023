<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component flex">
        <div class="small-text text-left w-2/5 whitespace-nowrap text-[1.5em]">{{ smallText }}</div>
        <div class="paragraph-section text-[1.2em]">
            <ul>
                <li v-for="item in list" class="transition-transform transform hover:scale-110">
                    <NuxtLink class="pg" :to='item.link'>
                        <span v-if="item.text && !hideTitle">{{ item.text }}</span>
                        <img :src="item.img" v-if="item.img" class="max-h-16 max-w-[85vw] mb-10">
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'smallText',
        'list',
        'hideTitle',
    ]
}
</script>

<style scoped>

@media only screen and (max-width: 55em) {
    .component {
        flex-direction: column
    }

    .small-text {
        text-align: left
    }

    .paragraph-section {
        width: 80%;
        margin-top: 2em;
    }
}
</style>