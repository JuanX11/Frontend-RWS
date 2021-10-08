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
import MyCardCarros from "../components/MyCard-Carros.vue";

export default {
  name: "ArticulosCarro",
  components: {
    MyCardCarros,
  },
  data: () => ({
    arrayCard: [
      {
        titleCard:
          "RASTREADOR, LOCALIZADOR GPS VEHICULO+1 AÑO PLATAFORMA GRATIS",
        subtitleCard: "100.000 COP",
        textCard:
          "Permitirá establecer una conversación con el conductor del vehículo en tiempo real. Cuenta con micrófono te permitirá escuchar en directo todo lo que sucede en el vehículo.Rastreo en tiempo real sms o gprs. Apagado remoto del vehículo Homologado como SECUREMORE G05, CRC TM 17 2223",
        img: "https://http2.mlstatic.com/D_NQ_NP_722751-MCO41036859012_032020-O.jpg",
      },
      {
        titleCard:
          "LUBRICANTE WD-40 11 0Z Por la compra de este producto Lleve Gratis DESENGRASANTE H7 32 OZ",
        subtitleCard: "35.900 COP",
        textCard:
          "Kit 2 productos. 1 Lubricante wd-40 11 0z: Multiusos para la industria, sector automotriz, la aviación, ferretería, hogar,construcción, agricultura, equipos náuticos,etc. 2. ",
        img: "https://i.linio.com/p/dd2df954094434e56b50603f137c470d-product.jpg",
      },
      {
        titleCard:
          "ALFOMBRILLA ANTIADHERENTE PARA TELÉFONO / GPS / MP4 / MP3 X 2 UNIDADES",
        subtitleCard: "$24.900 COP",
        textCard:
          "Alta adherencia. Buen equipamiento y la mejor calidad. Reutilizable, extraíble, lavable, reciclable y ecológico. Resistente a la temperatura, sin adhesivos. Sostenga todos sus dispositivos digitales, gafas de sol o monedas de forma segura en su tablero sin adhesivos o residuos pegajosos. 13 x 7 Cm",
        img: "https://homecenterco.scene7.com/is/image/SodimacCO/374503",
      },
      {
        titleCard: "PIJAMA SEMI-IMPERMEABLE PARA CARRO SEDAN TALLA M Y L",
        subtitleCard: "87.000 COP",
        textCard:
          "Protección contra sol, contra lluvia con una resistencia de hasta el 60%, contra desechos de aves, contra uñas de gatos",
        img: "https://http2.mlstatic.com/D_NQ_NP_786071-MCO47060723369_082021-O.webp",
      },
      {
        titleCard: "KIT PROTECTORES DE ASIENTOS LUJO NEGRO",
        subtitleCard: " $139.000 COP",
        textCard:
          "Cuida tu vehículo con el mejor estilo. Este cubre asiento ajusta bien, protege la cojinería, es cómodo y antiderrame.",
        img: "https://homecenterco.scene7.com/is/image/SodimacCO/234591",
      },
      {
        titleCard: "CUBRE VOLANTE PREMIUM NEGRO - SPC1113BK",
        subtitleCard: "59.900 COP",
        textCard:
          "Material de PU suave al tacto y PVC antideslizante para mayor comodidad y agarre. Secciones de agarre elevadas para la mejor experiencia de dirección. Material elástico duradero. Anti desaparición. Ajuste universal. ",
        img: "https://m.media-amazon.com/images/I/81G4TC8jYFL._AC_SL1500_.jpg",
      },

      {
        titleCard: "KIT DE CARRETERA PILOT RACING REGLAMENTARIO",
        subtitleCard: "119.950 COP",
        textCard:
          "Incluye Extintor 5 Libras Abc Multiproposito, Señales Triangulares, Tacos Plasticos, Botiquín, Juego Herramientas Básico, Linterna, Guantes, Bolsa De Gasolina, Chaleco Reflectivo Y Maletín De Paño",
        img: "https://http2.mlstatic.com/D_NQ_NP_923758-MCO43540896651_092020-W.jpg",
      },
      {
        titleCard: "TAPETE PVC 4 PIEZAS",

        subtitleCard: "69.900 COP",
        textCard: "",
        img: "https://juntozstgsrvproduction.blob.core.windows.net/default-blob-images/orig_AC-0099_1_678718.jpg?w=450&h=450",
      },
      {
        titleCard: "TAPETE UNIVERSAL BAÚL GRIS",
        subtitleCard: "94.900 COP",
        textCard:
          "Para la protección del baúl de su carro. Tapete que se ajusta a la mayoría de automóviles y camionetas.",
        img: "https://http2.mlstatic.com/D_NQ_NP_986960-MCO40595012225_012020-O.jpg",
      },
    ],
  }),
};
</script>