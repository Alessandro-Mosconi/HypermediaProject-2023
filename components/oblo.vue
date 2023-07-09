<template>
    <div class="window_group">
            <div class="wrapper">
        <div ref="stars" class="stars">
            <div ref="star" class="star" v-for="i in 100"></div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    async mounted() {
      // wait for $refs to be available
      await this.$nextTick();
  
      const {
        clientWidth: mainWidth,
        clientHeight: mainHeight,
      } = this.$refs.stars;
  
      this.$refs.star.forEach((box) => {
        box.style.left = Math.random() * (mainWidth - box.clientWidth) + "px";
        box.style.top = Math.random() * (mainHeight - box.clientHeight) + "px";
      });
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 350px;
    border-radius: 100px;
    box-shadow: -3px -3px 0px 5px rgba(212, 212, 212, 1), 5px 5px 0px 2px rgba(255, 255, 255, 1);
    background: linear-gradient(310deg, rgba(2, 0, 36, 1) 0%, rgb(24, 24, 26) 0%, rgba(0, 0, 0, 1) 80%);
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
  .stars {
    width: 400px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    animation: flyby 30s linear infinite;
  }
  
  .star {
    border-radius: 50%;
    background: #fff;
    position: absolute;
    width: 2px;
    height: 2px;
    animation: twinkle 8s linear infinite;
    animation-delay: 6s;
    /* parent width - box width */
  }

  
@keyframes twinkle {
    0% {
        transform: scale(1, 1);
   }
    10% {
        transform: scale(0.8, 0.8);
   }
    20% {
        transform: scale(2, 2);
   }
    30% {
        transform: scale(0.5, 0.5);
   }
    40% {
        transform: scale(1.5, 1.5);
   }
    100% {
        transform: scale(1, 1);
   }
}
@keyframes flyby {
    from {
        left: 0%;
   }
    to {
        left: -100%;
   }
}
  </style>