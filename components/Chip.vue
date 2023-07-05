<template>
    <NuxtLink id="about" class="selection pg" :to='link?link:""'>
        <div :class="{'md:w-auto mx-5': isAuto, 'border-0': isEmpty, 'md:border-4 border-2': !isEmpty}" class="w-fit md:flex justify-center items-center py-2 px-4 rounded-full  border-white ">
            <div class="leading-none max-w-full flex-initial">{{ text }}</div>
            <i v-if="link" class="ml-2 fa-solid fa-arrow-right"></i>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        text: String,
        autoWidth: Boolean,
        link: String
    },
    computed: {
        isAuto () {
            return this.autoWidth? true : false;
        },
        isEmpty () {
            return this.text? false : true;
        }
      }
}

</script>


<style scoped>

.selection:hover i{
    transform: rotate(0deg);
}

i { 
    transition: transform ease 0.5s;
    transform: rotate(-45deg);
}

</style>