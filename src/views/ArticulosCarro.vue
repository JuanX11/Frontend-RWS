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
        titleCard: "Kit Cubreasiento Lujo Negro",
        subtitleCard: " $420.000 COP" ,
        textCard: "Homologado ECE 2205R Peso 1.300 gr  Interior desmontable y lavable, Tejidos anti alergénicos, Ventilación interna, Hebilla de cierre micrométrico metálico, Poliestireno interno de múltiple densidad, Pantalla solar interna."
,
        img: "https://images-na.ssl-images-amazon.com/images/I/41YWS393GqL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
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