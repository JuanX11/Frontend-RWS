<template>
<v-responsive >

<v-container  
>
    <v-card
 class="mx-auto"
    max-width="344px"
    max-height="700px"       
    >
    <v-img
        :src=ArticulosCarro.img

        width="344px"
        height="200px"
        >
    </v-img>

     <v-card-title>
{{ ArticulosCarro.titleCard}}   
 </v-card-title>

    <v-card-subtitle>
     <H3>Precio: {{ ArticulosCarro.subtitleCard}}</H3>
    </v-card-subtitle>
        
    <v-card-actions>
        <v-btn
        to="/Inicio"
           color="rgb(45, 68, 102)"
            outlined
            >
            Añadir
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
        
        icon
        @click="show=!show">
        <v-icon >
            {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}
        </v-icon>
        </v-btn>
    </v-card-actions>
    <v-expand-transition>
        <div class="cardtext" v-show="show">
            
                
            <v-container >
                {{ ArticulosCarro.textCard}}
            </v-container>
            </div>
        </v-expand-transition>
    </v-card>
    </v-container>
    
    </v-responsive>
</template>



<script>
export default {
    name:'MyCard-Carros',
    data: () => ({
        show: false
    }),
    props: [
        'ArticulosCarro',
    ]
}
</script>