<template>
    <div class="relative ">
        <div class="flex md:flex-row flex-col uppercase text-sm absolute inset-x-0 md:bottom-5 bottom-32">
            <button class="uppercase itemButton mr-auto ml-auto md:basis-1/3 basis-full mb-14"
                    v-for="(item, index) in items" :key="index" @click="filterItems(item)">
                {{ item }}
            </button>
        </div>
    </div>

    <div>
        <div class="flex flex-col sm:flex-row justify-center">
            <div class="flex flex-col">
                <div v-for="(p, index) in projects" :key="index" class="p-4 mb-[-30px]">
                    <div v-if="index % 2 ===0">
                        <CardProject
                            :projectName="p.name"
                            :projectId="p.id"
                            :img="p.img_url"
                            :area="p.area"/>
                    </div>

                </div>
            </div>
            <!-- second column -->
            <div class="flex flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4">
                    <div v-if="index % 2 ===1">
                        <!-- empty space -->
                        <div class="sm:flex hidden" style="
          width: 300px;
          height: 160px;
          background-color: rgba(255, 0, 0, 255);
        "></div>

                        <div>
                            <NuxtLink id="about" :to="'/projects/' + p.id">
                                <CardProject
                                    :projectName="p.name"
                                    :projectId="p.id"
                                    :img="p.img_url"
                                    :area="p.area"/>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
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
