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
        titleCard: "COMBO X5 CASCO + GUANTES + LUCES + CANDADO + BUFANDA OFERTA",
        subtitleCard: " $COP" ,
        textCard: "CASCO GW MANTIS,  Rueda de ajuste en la parte trasera, Espumas internas cómodas y protector de barbilla, Visera extraible, GUAYA DE SEGURIDAD DE CLAVE GW-150cm, Fácil cambio de clave, Fácil de llevar, Incluye base para montar en la bici. Color negro, Marca: GW",
        img: "https://http2.mlstatic.com/D_NQ_NP_790180-MCO47260110689_082021-O.webp",
      },
      {
        titleCard: "",
        subtitleCard: " $119.900 COP" ,
        textCard: "",
        img: "",
      },
      {
        titleCard: "",
        subtitleCard: " $COP" ,
        textCard: "",
        img: "",
      },
      {
        titleCard: "",
        subtitleCard: " $COP" ,
        textCard: "",
        img: "",
      },
      {
        titleCard: "",
        subtitleCard: " $COP" ,
        textCard: "",
        img: "",
      },
      
    ],
  }),
};
</script>