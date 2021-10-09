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
        subtitleCard: "$418.621 COP",
        textCard: "agadg",
        img: "https://wikost.com/22881-large_default/chaqueta-sd-jt32-verano-touring-hombre-ice-rojo-s.jpg",
      },
       {
        titleCard: "GUANTES STUNT EVO NEGRO/ROJO",
        subtitleCard: "$250.000 COP",
        textCard: "Caracterizado por su palma de cuero, su ajuste, su comodidad y sus sensaciones de control son excepcionales gracias a su estructura superior extensible. Estructura de tela Spandex ™ de 4 vías (parte superior) para elasticidad / piel de cabra de grano completo para flexibilidad y silicona Clarino® (palma) para agarre. Sistema de cierre con pestaña + velcro y pestaña de roscado Clarino ® .Sistema TouchScreen ™ (pulgar e índice) para manejar pantallas táctiles.",
        img: "https://falabella.scene7.com/is/image/Falabella/8331754_1?wid=1500&hei=1500&qlt=70",
      },
       {
        titleCard: "CASCO MT TARGO SOLID AZUL MATE",
        subtitleCard: "$294.500 COP",
        textCard: "Homologado ECE  R 2205. Elaborado en polímero de alto impacto. Peso 1400 gramos +- 50 gramos, Interior desmontable y lavable. Tejidos anti alergénicos. Ventilación interna. Sistema de cierre micrométrico metálico,Visor en policarbonato óptico anti rayones.Deflector nasal incluido.",
        img: "https://www.motardinn.com/f/13745/137452299/mt-helmets-casco-integral-targo-solid.jpg",
      },
       {
        titleCard: "CASCO MT FF 110 REVENGE 2 RS A0 AZUL BRILLO",
        subtitleCard: "$475.000 COP",
        textCard: "Homologado ECE 2205, Elaborado en polímero de alto impacto, interior desmontable y lavable. Tejidos anti alergénicos. Ventilación interna. Sistema de cierre micrométrico metálico, Poliestireno interno de múltiple densidad.",
        img: "https://motosrissi.com/7385-large_default/casco-mt-ff110-revenge-2-rs-a0-azul-perla-brillo.jpg",
      },
       {
        titleCard: "BODY ARMO EVO X7",
        subtitleCard: "$980.000 COP",
        textCard: "Soft Active Jacket Evo es una chaqueta de seguridad multideporte 100% Made in Italy compuesta por protector de espalda (CE aprobado EN1621-2 Lev.2), protectores de brazos, pecho y costillas. Incluye almohadillas en el costado del cuello (HCD - Amortigua.",
        img: "https://productimages.hepsiburada.net/s/12/375/8946717950002.jpg",
      },
      {
        titleCard: "CUPULA KAWASAKI Z650 2020",
        subtitleCard: "$559.000 COP",
        textCard: "Cúpula específica ahumada 28 x 36,5 cms (hxa) a combinar con los anclajes A4128A",
        img: "https://www.ubricarmotos.com/228346-large_default/cupula-kawasaki-z650-2020-puig-naked-new-generation-sport.jpg",
      },
      {
        titleCard: "CANDADO BUMPER 885 1 MTS",
        subtitleCard: "$20.300 COP",
        textCard: "Candado articulado Enduro 885 Seguro Blanco 1 mts largo. Nivel 4.5/10 .Llave reversible, proteccion contra impacto",
        img: "data:image/jpeg;base64,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",
      },
      
    ],
  }),
};
</script>