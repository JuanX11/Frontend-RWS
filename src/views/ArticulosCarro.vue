<template>
  <v-responsive>
    <v-card text color="blue lighten-4" class="elevation-0">
      <v-container :aspect-ratio="16 / 9" class="mx-auto">
        <v-app id="agagad">
          <div class="d-flex flex-wrap justify-space-around mb-6" flat tile>
            <div class="pa-2" v-for="(item, i) in arrayCard" :key="i">
              <MyCard-Carros :ArticulosCarro="arrayCard[i]" />
            </div>
          </div>
        </v-app>
      </v-container>
    </v-card>
  </v-responsive>
</template>



<script>
import MyCardCarros from '../components/MyCard-Carros.vue';

export default {
  name: "ArticulosCarro",
  components: {
    MyCardCarros
    
  },
  data: () => ({
    
    arrayCard: [
      {
        titleCard: "KIT PROTECTORES DE ASIENTOS LUJO NEGRO",
        subtitleCard: " $420.000 COP" ,
        textCard: "Cuida tu vehículo con el mejor estilo. Este cubre asiento ajusta bien, protege la cojinería, es cómodo y antiderrame."
,
        img: "https://homecenterco.scene7.com/is/image/SodimacCO/234591",
      },
      {
        titleCard: "GUANTE SD-C16 VERANO URBAN HOMBRE NEGRO GRIS",
        subtitleCard: "$80.000 COP",
        textCard: "agadg",
        img: "https://motosrissi.com/3191-large_default/guante-seventy-sdc16-verano-urban-hombre-negrogris.jpg",
      },
      {
        titleCard: "CHAQUETA SD-JT32 VERANO TOURING HOMBRE ICE ROJO",
        subtitleCard: "418.621 COP",
        textCard: "agadg",
        img: "https://wikost.com/22881-large_default/chaqueta-sd-jt32-verano-touring-hombre-ice-rojo-s.jpg",
      },
      
    ],
  }),
};
</script>