<template>
    <div>
        <div class="flex flex-col sm:flex-row justify-center w-full">
            <!-- single column (small display)-->
            <div class="md:hidden mx-[10px] flex flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4 mt-10">
                    <CardProject :areaName="getAreaByCode(p.area)" :projectName="p.name" :projectId="p.id" :img="p.img_url" :area="p.area" :bottomElement="p.top?('#0'+p.top+' best project'):''" :hiddentopElement="p.starting_date" :hiddenBottomElement="p.capital_mln + ' mln dollars'"/>
                </div>
            </div>
            <!-- first column -->
            <div class="2xl:mx-[100px] lg:mx-[50px] md:mx-[25px] basis-1/2 md:flex hidden flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4 ">
                    <div v-if="index % 2 === 0" class="mt-10 mb-10">
                        <cardProject :areaName="getAreaByCode(p.area)" :projectName="p.name" :projectId="p.id" :img="p.img_url" :area="p.area" :bottomElement="p.top?('#0'+p.top+' best project'):''" :hiddenTopElement="p.starting_date" :hiddenBottomElement="p.capital_mln + ' mln dollars'"/>
                    </div>

                </div>
            </div>
            <!-- second column -->
            <div class="2xl:mx-[100px] lg:mx-[50px] md:mx-[25px] basis-1/2 md:flex hidden flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4">
                    <div v-if="index % 2 === 1"  class="mt-10 mb-10">
                        <div>
                            <cardProject :areaName="getAreaByCode(p.area)" :projectName="p.name" :projectId="p.id" :img="p.img_url" :area="p.area" :bottomElement="p.top?('#0'+p.top+' best project'):''" :hiddenTopElement="p.starting_date" :hiddenBottomElement="p.capital_mln + ' mln dollars'"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props: {
        projects: Array,
        areas: Array,
    },
    methods: {
        getAreaByCode(areaCode) {
            
            let name = '';
            if (this.areas && this.areas.length > 0) {
                name = this.areas.find(row => row?.code === areaCode).name || '';
            }
            return name;
        }
    }
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
