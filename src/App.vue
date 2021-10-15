<template>
  <v-responsive>
    <v-app>
      <v-app-bar app color="rgb(45, 68, 102)" dark>
        <v-spacer>
          <v-toolbar-title>
            <v-img 
            alt="Logo"
            class="shrink mr-2"
            contain
            src="./logo.png"
            transition="scale-transition"
            width="60"            >

            </v-img>
          </v-toolbar-title>
        </v-spacer>
        
        <v-btn to="/" color="rgb(45, 68, 102)" elevation="0"  >
          <h4 style="color: #ffffff">Inicio</h4>
        </v-btn>
        <div class="text-left">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                
                color="rgb(45, 68, 102)"
                elevation="0"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <h4 style="color: #ffffff">Artículos</h4>
              </v-btn>
            </template>
            <!-- BOTONES MENU ARTICULOS   -->
            <v-list color="rgb(45, 68, 102)" dense nav>
              <v-list-items link>
                <v-btn
                  elevation="0"
                  to="/Articulos-Motos"
                  color="rgb(45, 68, 102)"
                  height="40"
                  width="110"
                >
                  <h4 style="color: #ffffff">Motos</h4>
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn
                  elevation="0"
                  color="rgb(45, 68, 102)"
                  height="40"
                  width="110"
                  to="/Articulos-Carros"
                >
                  <h4 style="color: #ffffff">Carros</h4>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  elevation="0"
                  to="/Articulos-Bicicleta"
                  color="rgb(45, 68, 102)"
                  height="40"
                  width="110"
                >
                  <h4 style="color: #ffffff">Bicicletas</h4>
                </v-btn>
              </v-list-items>
            </v-list>
          </v-menu>
        </div>
        <!-- Boton NOSOTROS        -->
        <v-btn
          color="rgb(45, 68, 102)"
          elevation="0"
          to="/Nosotros"
        >
          <h4 style="color: #ffffff">Nosotros</h4>
        </v-btn>

        <!-- Boton usuario      -->
        <v-btn color="rgb(45, 68, 102)" elevation="0"  to="/Usuario">
          <h4 style="color: #ffffff">
            <v-icon>mdi-account</v-icon>
          </h4>
        </v-btn>

        <!-- Boton Carrito         -->
        <v-btn
          color="rgb(45, 68, 102)"
          elevation="0"
          to="/CarroDeCompras"
        >
          <h4 style="color: #ffffff">
            <v-icon>mdi-cart</v-icon>
          </h4>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
