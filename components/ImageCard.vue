<template>
    <div class="external-frame relative m-0" @mouseover="mouseIn" @mouseleave="mouseOut">
        <div class="mask-cornice absolute h-full z-10">
            <img class="h-full" :style="bgColor" src="@/assets/img/transparent.png" alt="ciao">
        </div>
        <div class="mask-persona h-full" :id="alt">
            <img class="img-person h-full w-full"  :src="img_link" :alt="alt">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img_link: String,
        alt: String,
        color: String
    },
    computed: {
        bgColor() {
            return `background-color: ${this.color ? this.color : '#bb86fc'};`;
        }
    },
    methods: {        
        mouseIn(){
            console.log("dentro")
            document.getElementById(this.alt).style.backgroundColor = this.color ? this.color : '#bb86fc';
        },
        mouseOut(){
            console.log("fuori")
            document.getElementById(this.alt).style.backgroundColor = 'transparent';
        }
    }
}
</script>

<style scoped>
.mask-persona {
    -webkit-mask-image: url(@/assets/img/image-mask.png);
    mask-image: url(@/assets/img/image-mask.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: contain;
    transition: .3s ease-in-out;
    background: linear-gradient(to top, #121212, transparent);
}

.external-frame:hover .mask-persona {
    background: linear-gradient(to top, #121212, transparent);
}


.mask-cornice {
    position: absolute;
    -webkit-mask-image: url(@/assets/img/image-mask2.png);
    mask-image: url(@/assets/img/image-mask2.png);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: contain;
}
</style>