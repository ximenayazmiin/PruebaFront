<template lang="es">
  <div class="cont">
    <div class="cont_table">
      <div class="cont_table_cabecera">
        <div>#</div>
        <div>ID</div>
        <div>Nombre</div>
        <div>Total</div>
        <div>Cantidad</div>
        <div>Ver Productos</div>
      </div>
      <div class="cont_table_contenido" v-if="ordenes_compra != null && ordenes_compra != 1">
        <div class=" cont_table_contenido--reglones" v-for="orden in ordenes_compra">
          <label>{{orden.number}}</label>
          <label>{{orden.id}}</label>
          <label>{{orden.name}}</label>
          <label>{{orden.totals.total}}</label>
          <label>{{orden.items.length}}</label>
          <button @click="verDetalle(orden)" class="cont_table_contenido--reglones-btn">
            <b-icon icon="eye" size="is-small"></b-icon>
          </button>

        </div>
      </div>
      <div class="cont_carga" v-else>
        <div class="loader2">
          <div class="cell d-0"></div>
          <div class="cell d-1"></div>
          <div class="cell d-2"></div>

          <div class="cell d-1"></div>
          <div class="cell d-2"></div>


          <div class="cell d-2"></div>
          <div class="cell d-3"></div>


          <div class="cell d-3"></div>
          <div class="cell d-4"></div>


        </div>
      </div>

    </div>
    <form_detalles_productos></form_detalles_productos>
    <form_agregar_producto></form_agregar_producto>
  </div>
</template>
<script>
import api from '~/assets/api'
import form_agregar_producto from '~/components/form_agregar_producto.vue'
import form_detalles_productos from '~/components/form_detalles_productos.vue'


export default {
  components:{
    form_detalles_productos,
    form_agregar_producto
  },
  data() {
    return {
      ordenes_compra:null
    }
  },
  methods: {
    verDetalle(orden){
      this.$store.commit('forms/openFormVerOrden',orden)
    }
  },

  created(){
    api.getOrdenCompra()
    .then(res => {
     if(res.success){
      this.ordenes_compra=res.orders
     }
     else{
      this.ordenes_compra= 1
     }
    }

    )
  }
}
</script>

