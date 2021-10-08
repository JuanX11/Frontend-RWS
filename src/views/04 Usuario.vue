<template>
  <v-app id="inspire">
    <v-content >
      <v-container  fluid>
        <v-row align="center" justify="center">
          <v-col cols="1" sm="10" md="10">
            <v-card
            color="blue lighten-4"
             class="elevation-12">
              <v-window
             
               v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col 
                    cols="12" md="8">
                      <v-card-text class="mt-12" >
                        <h1
                      
                        
                          class="text-center display-2 "
                        >Bienvenido a    <h3>RWS</h3></h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="#2D4466" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="#2D4466" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="#2D4466" outlined>
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ingrese sus datos para Iniciar Sesión></h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="coral"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-form-textbox-password"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                        <h3
                        class="text-center mt-4"
                        color="#66542D">¿Olvidaste tu Contraseña?</h3>
                         <div class="text-center mt-3">
                        <v-btn rounded color="2b2f54" dark>Ingresar</v-btn>
                        
                      </div>
                      </v-card-text>
                     
                                

                    </v-col>
                
                    <v-col class="elevation-2" cols="20" md="4"  >
                      <v-card-text 
                      
                      

                      dark class="black--text mt-16">
                                             
                                              

                        <h1 class="text-center display-1 mt-16">¿Es Nuevo?</h1>
                        <h5
                          class="text-center"
                        >Ingrese sus datos personales y comience su experiencia </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined @click="step++">Registrarse</v-btn>
                      </div>
                    </v-col>
                   
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col class="elevation-2" cols="12" md="4" >
                      <v-card-text
                      class="black--text mt-12">
                        <h1 class="text-center display-1">¿Ya Tienes Una Cuenta?</h1>
                        
                        
                      </v-card-text>
                      <div 
                      class="text-center">
                        <v-btn rounded outlined  @click="step--">Volver</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1  class="text-center display-2 black--text ">Crear Cuenta</h1>
                        <div class="text-center mt-4">
                         <v-btn class="mx-2" fab color="#2D4466" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="#2D4466" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="#2D4466" outlined>
                            <v-icon>mdi-github</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ingrese Su Correo Para Registrarse</h4>
                        <v-form>
                          <v-text-field
                            label="Usuario"
                            name="Name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />        
                                                  <h4 class="text-center mt-4"></h4>

                          <div class="text-center mt-n5">
                        <v-btn rounded color=" #2b2f54 " dark>Registrarse</v-btn>
                      </div>
                        </v-form>
                      </v-card-text>
                      
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>