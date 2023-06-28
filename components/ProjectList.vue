
<template>
    <div class="relative">
        <div class="flex md:flex-row flex-col uppercase text-sm absolute inset-x-0 md:bottom-5 bottom-32">
            <button class="uppercase itemButton mr-auto ml-auto md:basis-1/3 basis-full mb-14" v-for="(item, index) in items" :key="index" @click="filterItems(item)">
                {{ item }}
            </button>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg mx-auto">
        <div v-for="(p, index) in projects" :key="index" class="justify-center ml-auto mr-auto">
            <div>
                <NuxtLink id="about" class="pg" :to="'/projects/' + p.id">
                    <cardProject 
                    :projectName="p.name"
                    :img="p.img_url"
                    :area="p.area"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'projects'
    ],
    data() {
        return {
            items: ['All', 'Satellites', 'Space Mining', 'Space Tourism'],
        };
    },
    methods: {
        filterItems(filter) {
            alert(`Filtering items by: ${filter}`);
        },
    },
}
</script>

<style scoped>
.itemButton {
    /* Add your button styles here */
    background-color: #f2f2f200;
    border: 2px solid white;
    border-radius: 40px;
    padding: 10px;
    margin-bottom: 14px;
}
</style>