<template>
  <v-responsive>
    <v-card text color="blue lighten-4" class="elevation-0">
      <v-container :aspect-ratio="16 / 9" class="mx-auto">
        <v-app id="agagad">
          <div class="d-flex flex-wrap justify-space-around mb-6" flat tile>
            <div class="pa-2" v-for="(item, i) in arrayCard" :key="i">
              <MyCard-Bicicletas :ArticulosBicicleta="arrayCard[i]" />
            </div>
          </div>
        </v-app>
      </v-container>
    </v-card>
  </v-responsive>
</template>



<script>
import MyCardBicicletas from '../components/MyCard-Bicicletas.vue';

export default {
  name: "ArticulosBicicleta",
  components: {
    MyCardBicicletas,
  },
  data: () => ({
    
    arrayCard: [
      {
        titleCard: "COMBO X5 CASCO + GUANTES + LUCES + CANDADO + BUFANDA",
        subtitleCard: "$119.900 COP" ,
        textCard: "CASCO GW MANTIS,  Rueda de ajuste en la parte trasera, Espumas internas cómodas y protector de barbilla, Visera extraible, GUAYA DE SEGURIDAD DE CLAVE GW-150cm, Fácil cambio de clave, Fácil de llevar, Incluye base para montar en la bici. Color negro, Marca: GW",
        img: "https://http2.mlstatic.com/D_NQ_NP_790180-MCO47260110689_082021-O.webp",
      },
      {
        titleCard: "PEDALES BICICLETA GW ZP 101 DOBLE FUNCIÓN CHOCLES ",
        subtitleCard: " $144.900 COP" ,
        textCard: "Pedales GW doble función para usar con zapatillas de ciclismo con o sin calas. Incluye las calas. Superficie del pedal: doble función una de las caras viene con choclos de tensión ajustable para zapatillas de ciclismo y la otra cara es plana para usar con cualquier tipo de zapato",
        img: "https://http2.mlstatic.com/D_NQ_NP_712539-MCO31354104644_072019-O.jpg",
      },
      {
        titleCard: "COMBO KIT DE LIMPIEZA PARA BICICLETA GW SQUAD 1 X4 MTB ",
        subtitleCard: " $65.000 COP" ,
        textCard: "Lavado ecológico 200ml,  Limpiador discos 240ml, Desengrasante 200ml, Lubricante cadena 120ml, prolonga la vida de los componentes de tu bicicleta, y la estética de la pintura. Productos amigables con el medio ambiente.",
        img: "https://http2.mlstatic.com/D_NQ_NP_806439-MCO43879464404_102020-O.jpg",
      },
      {
        titleCard: "CASCO RUTA/MTB GW-029",
        subtitleCard: " $158.900 COP" ,
        textCard: "Casco Unisex hecho en Poliuretano, color Negro-Amarillo",
        img: "https://static.dafiti.com.co/p/gw-9566-1347941-1-product.jpg",
      },
      {
        titleCard: "ZAPATILLA GW RUTA SPUMANS",
        subtitleCard: " $319.900 COP" ,
        textCard: "Capellada: Cuero Sintetico, Malla de Nylon;  Forro: Poliester, Nylon Textil;   Suela: Resina de Nylon de Plastico, TPU;  Peso: 470g Par",
        img: "https://http2.mlstatic.com/D_NQ_NP_890319-MCO43495538214_092020-O.jpg",
      },
      {
        titleCard: "TIRA LED PARA CASCO",
        subtitleCard: " $42.300 COP" ,
        textCard: "Capellada: Cuero Sintetico, Malla de Nylon;  Forro: Poliester, Nylon Textil;   Suela: Resina de Nylon de Plastico, TPU;  Peso: 470g Par",
        
        img: "https://http2.mlstatic.com/D_NQ_NP_783499-MCO43351676558_092020-O.jpg",
      },
    ],
  }),
};
</script>