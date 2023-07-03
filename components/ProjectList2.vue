<template>
    <div>
        <div class="flex flex-col sm:flex-row justify-center w-full">
            <!-- single column -->
            <div class="md:hidden flex flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4 mt-10">
                    <CardProject :areaName="getAreaByCode(p.area)" :projectName="p.name" :img="p.img_url" :area="p.area" :topElement="p.starting_date"/>
                </div>
            </div>
            <!-- first column -->
            <div class="lg:mx-[50px] md:flex hidden basis-1/2  flex-col">
                <div v-for="(p, index) in projects" :key="index" class="p-4 ">
                    <div v-if="index % 2 === 0" class="mt-10 mb-10">
                        <cardProject :areaName="getAreaByCode(p.area)" :projectName="p.name" :projectId="p.id" :img="p.img_url" :area="p.area" :topElement="p.starting_date"/>
                    </div>

                </div>
            </div>
            <!-- second column -->
            <div class="lg:mx-[50px] md:flex hidden basis-1/2  flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4">
                    <div v-if="index % 2 === 1"  class="mt-10 mb-10">
                        <div>
                            <cardProject :areaName="getAreaByCode(p.area)" :projectName="p.name" :projectId="p.id" :img="p.img_url" :area="p.area" :topElement="p.starting_date"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default defineNuxtComponent({
    async asyncData() {
        const areas = await $fetch('/api/areas')

        return {
            areas
        }
    },
    props: {
        projects: Array
    },
    methods: {
        getAreaByCode(areaCode) {
            const name = this.areas.find(row => row.code === areaCode).name;
            return name ? name : '';
        }
    }
})

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
