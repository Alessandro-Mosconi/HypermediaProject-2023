<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component">
    <div class="small-text">{{ smallText }}</div>
    <div class="paragraph-section">
        <ul>
            <li v-for="item in list">
                <NuxtLink class="pg" :to='item.link'>
                    <span v-if="item.text && !hideTitle">{{ item.text }}</span>
                    <img :src="item.img"  v-if="item.img" class="max-h-16 max-w-[85vw] mb-10">
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
.component {
  display: flex;
}

.small-text {
  text-align:left;
  width: 40%;
  white-space: nowrap;
  font-size: 1.5em;
}

.paragraph-section {
    width:60%;
    font-size: 1em!important;
}

.paragraph-section a{
  font-size: 1.2em!important;
}

@media only screen and (max-width :55em) {  
 .component{
     flex-direction : column
 }
 .small-text{
     text-align:left
 }
 .paragraph-section{
     width :80%;
    margin-top: 2em;
 }   
}
</style>