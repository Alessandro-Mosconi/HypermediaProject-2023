<!--
    Big text with paragraph on the right
-->

<template>
    <div class="flex-col md:flex-row flex">
        <div class="text-left md:w-2/5 whitespace-nowrap text-[1.5em]">{{ smallText }}</div>
        <div class="md:w-3/5 mt-3 text-[1em]">
            <ul>
                <li v-for="item in list" >
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

a {
    display: inline-block;
    position: relative;
    color: white;
  }
  
  a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }
  
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>