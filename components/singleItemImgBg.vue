<!--
    Centered title with image background
-->
<template>
  <div class="threeItems relative" :style="bgImage">
      <div class="flex md:flex-row flex-col uppercase md:text-3xl text-xl absolute inset-x-0 md:bottom-5 bottom-32">
          <div class="mr-auto ml-auto md:basis-1/3 basis-full mb-14">
              <Chip
              :autoWidth="true"
              :text="title">
              </Chip>
          </div>
          <div class="mr-auto ml-auto md:basis-1/3 basis-full mb-14">
              <Chip
              :autoWidth="true"
              :text="''">
              </Chip>
          </div>
          <div class="mr-auto ml-auto md:basis-1/3 basis-full">
              <Chip
              :autoWidth="true"
              :text="''">
              </Chip>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  props: {
      title: String,
      description: String,
      img: String
  },
  computed: {
      bgImage () {
      return `background-image: url("${this.img}");`;
}
}
}
</script>


<style>
.threeItems {
  width: 100%;
  height: 85vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>