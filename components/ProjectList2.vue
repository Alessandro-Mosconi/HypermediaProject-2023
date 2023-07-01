<template>
    <div>
        <div class="flex flex-col sm:flex-row justify-center w-full">
            <!-- single column -->
            <div class="md:hidden  flex flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4 mb-[-30px]">
                    <CardProject :projectName="p.name" :img="p.img_url" :area="p.area"/>
                </div>
            </div>
            <!-- first column -->
            <div class="lg:mx-[50px] md:flex hidden basis-1/2  flex-col">
                <div v-for="(p, index) in projects" :key="index" class="p-4 mb-[-30px]">
                    <div v-if="index % 2 === 0">
                        <CardProject :projectName="p.name" :img="p.img_url" :area="p.area"/>
                    </div>

                </div>
            </div>
            <!-- second column -->
            <div class="lg:mx-[50px] md:flex hidden basis-1/2  flex-col justify-center">
                <div v-for="(p, index) in projects" :key="index" class="p-4">
                    <div v-if="index % 2 === 1">
                        <!-- empty space -->
                        <div class="sm:flex hidden" style="
          width: 400px;
          height: 100px;
          background-color: rgba(255, 0, 0,0);
        "></div>

                        <div>
                                <cardProject :projectName="p.name" :img="p.img_url" :area="p.area"/>
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
    methods: {
        isCol1(index) {
            console.log(index % 2 === 0 || window.innerWidth < 500)
            return index % 2 === 0 || window.innerWidth < 500
        },
        isCol2(index) {
            console.log(index % 2 === 1 && window.innerWidth >= 500)
            return index % 2 === 1 && window.innerWidth >= 500
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
