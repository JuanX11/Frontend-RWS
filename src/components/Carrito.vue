<template>
  <v-responsive>
    <v-container >
      <v-expand-transition>
        <v-card>
          <v-simple-table
            text
            color="blue lighten-4"
            fixed-header
            height="595px"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h1>Productos</h1>
                  </th>

                  <th class="text-left"><h1>Precios</h1></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.Productos">
                  <td>{{ item.Productos }}</td>
                  <td>{{ item.Precios }}</td>
                </tr>
              </tbody>
              
            </template>
          </v-simple-table>
          <v-card elevation="0">
     
        <v-row align="center" justify="center" >
          <v-btn elevation="1" class="mx-1" color="rgb(45, 68, 102)" dark>
            Agregar Al Carro
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          <v-btn elevation="1" color="rgb(45, 68, 102)" dark>
            Eliminar del Carro
            <v-icon dark> mdi-minus </v-icon>
          </v-btn>
        </v-row>
      
    </v-card>
    
        </v-card>
      </v-expand-transition>
    </v-container>
    
  </v-responsive>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          Productos: "CASCO TR902XSV STREETFIGHTER SV-TWIN-C4-NARANJA",
          Precios: "$420.000",
        },
        {
          Productos: "CHAQUETA SD-JT32 VERANO TOURING HOMBRE ICE ROJO",
          Precios: "$418.621",
        },
        {
          Productos: "GUANTES STUNT EVO NEGRO/ROJO",
          Precios: "$250.000",
        },
        {
          Productos: "CANDADO BUMPER 885 1 MTS",
          Precios: "$20.300",
        },
      ],
    };
  },
};
</script>