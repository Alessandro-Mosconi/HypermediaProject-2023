<template>
    <NuxtLink id="about" class="selection pg" :to='link?link:""'>
        <div :style="getBorderColor + ' ' + getBgColor" :class="{'md:w-auto mx-5': isAuto, 'border-0': isEmpty, 'md:border-2 border-2': !isEmpty}" class="w-fit flex flex-row justify-center items-center py-2 px-4 rounded-full ">
            <div class="md:pl-2 py-3 leading-none max-w-full flex-initial">{{ text }}</div>
            <i v-if="isButton" class="md:pr-2 ml-2 fa-solid fa-arrow-right"></i>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        text: String,
        autoWidth: Boolean,
        link: String,
        isButton: Boolean,
        borderColor: String,
        backgroundColor: String
    },
    computed: {
        isAuto () {
            return this.autoWidth? true : false;
        },
        isEmpty () {
            return this.text? false : true;
        },
        getBorderColor () {            
            const color = this.borderColor?this.borderColor:'#FFFFFF';            
            return 'border-color: ' + color + '!important;';
        },
        getBgColor () {            
            const color = this.backgroundColor?this.backgroundColor:'transparent';            
            return 'background-color: ' + color + '!important;';
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