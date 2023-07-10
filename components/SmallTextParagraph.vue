<!--
    
-->

<template>
    <div class="component">
        <div class="small-text 2-full lg:w-2/5 md:text-2xl text-lg">
            {{ smallText }}
        </div>
        <div class="mt-3 md:mt-0 w-full lg:w-3/5">
            <p class=" md:text-lg text-sm leading-snug">
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        smallText: String,
        paragraph: String,
    }
}
</script>

<style scoped>
.component {
  display: flex;
}
p {
    padding: 0;
}
.small-text {
  text-align:left;
  white-space: nowrap;
}

.paragraph-section {
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
 }   
}
</style>