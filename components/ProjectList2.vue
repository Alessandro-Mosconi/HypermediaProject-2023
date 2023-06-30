<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-center">
      <!-- single column -->
      <div class="md:hidden   flex flex-col">
        <div v-for="(p, index) in projects" :key="index" class="p-4 mb-[-30px]">
            <NuxtLink id="about" :to="'/projects/' + p.id">
              <cardProject :projectName="p.name" :img="p.img_url" :area="p.area" />
            </NuxtLink>
        </div>
      </div>
      <!-- first column -->
      <div class="md:flex hidden basis-1/2  flex-col">
        <div v-for="(p, index) in projects" :key="index" class="p-4 mb-[-30px]">
          <div v-if="index % 2 === 0">
            <NuxtLink id="about" :to="'/projects/' + p.id">
              <cardProject :projectName="p.name" :img="p.img_url" :area="p.area" />
            </NuxtLink>
          </div>

        </div>
      </div>
      <!-- second column -->
      <div class="md:flex hidden basis-1/2  flex-col justify-center">
        <div v-for="(p, index) in projects" :key="index" class="p-4">
          <div v-if="index % 2 === 1">
            <!-- empty space -->
            <div class="sm:flex hidden" style="
          width: 300px;
          height: 160px;
          background-color: rgba(255, 0, 0, 255);
        "></div>

            <div>
              <NuxtLink id="about" :to="'/projects/' + p.id">
                <cardProject :projectName="p.name" :img="p.img_url" :area="p.area" />
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
