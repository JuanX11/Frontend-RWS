<template>
  <v-carousel cycle
  height="632">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/ImagenesCarrousel/RWS CARRUSEL1.png"),
        },
        {
          src: require("../assets/ImagenesCarrousel/Moto.jpg"),
        },
        {
          src: require("../assets/ImagenesCarrousel/CarroCarrousel.jpg"),
        },
        {
          src: require("../assets/ImagenesCarrousel/BicicletaCarrousel.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>