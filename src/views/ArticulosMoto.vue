<template>
  <v-responsive>
    <v-card text color="blue lighten-4" class="elevation-0">
      <v-container :aspect-ratio="16 / 9" class="mx-auto">
        <v-app id="agagad">
          <div class="d-flex flex-wrap justify-space-around mb-6" flat tile>
            <div class="pa-2" v-for="(item, i) in arrayCard" :key="i">
              <MyCard-Motos :ArticulosMoto="arrayCard[i]" />
            </div>
          </div>
        </v-app>
      </v-container>
    </v-card>
  </v-responsive>
</template>



<script>
import MyCardMotos from '../components/MyCard-Motos.vue';

export default {
  name: "ArticulosMoto",
  components: {
    MyCardMotos
    
  },
  data: () => ({
    
    arrayCard: [
      {
        titleCard: "CASCO TR902XSV STREETFIGHTER SV-TWIN-C4-NARANJA ",
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
       {
        titleCard: "GUANTES STUNT EVO NEGRO/ROJO",
        subtitleCard: "250.000 COP",
        textCard: "Caracterizado por su palma de cuero, su ajuste, su comodidad y sus sensaciones de control son excepcionales gracias a su estructura superior extensible. Estructura de tela Spandex ™ de 4 vías (parte superior) para elasticidad / piel de cabra de grano completo para flexibilidad y silicona Clarino® (palma) para agarre. Sistema de cierre con pestaña + velcro y pestaña de roscado Clarino ® .Sistema TouchScreen ™ (pulgar e índice) para manejar pantallas táctiles.",
        img: "https://falabella.scene7.com/is/image/Falabella/8331754_1?wid=1500&hei=1500&qlt=70",
      },
       {
        titleCard: "CASCO MT TARGO SOLID AZUL MATE",
        subtitleCard: "294.500 COP",
        textCard: "Homologado ECE  R 2205. Elaborado en polímero de alto impacto. Peso 1400 gramos +- 50 gramos, Interior desmontable y lavable. Tejidos anti alergénicos. Ventilación interna. Sistema de cierre micrométrico metálico,Visor en policarbonato óptico anti rayones.Deflector nasal incluido.",
        img: "https://www.motardinn.com/f/13745/137452299/mt-helmets-casco-integral-targo-solid.jpg",
      },
       {
        titleCard: "CASCO MT FF 110 REVENGE 2 RS A0 AZUL BRILLO",
        subtitleCard: "475.000 COP",
        textCard: "Homologado ECE 2205, Elaborado en polímero de alto impacto, interior desmontable y lavable. Tejidos anti alergénicos. Ventilación interna. Sistema de cierre micrométrico metálico, Poliestireno interno de múltiple densidad.",
        img: "https://motosrissi.com/7385-large_default/casco-mt-ff110-revenge-2-rs-a0-azul-perla-brillo.jpg",
      },
      
    ],
  }),
};
</script>