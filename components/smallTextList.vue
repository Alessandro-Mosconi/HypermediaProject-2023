<!--
    Big text with paragraph on the right
-->

<template>
    <div class="component">
    <div class="small-text">{{ smallText }}</div>
    <div class="paragraph-section">
        <li v-for="item in list">
            <NuxtLink class="pg" :to='item.link'>{{ item.text }}</NuxtLink>
        </li>
    </div>
    </div>
</template>

<script>
export default {
    props: [
        'smallText',
        'list',
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