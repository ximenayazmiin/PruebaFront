<template lang="es">
  <div class="cont_form" v-if="ver_form">
      <div class="cont_form__form">
        <span class="cont_form__form_cabecera">
          <p>Productos de compra</p>
          <button @click="cerrar()" class="cont_form__form_cabecera--cerrar"> X </button>
        </span>
        <div class="cont_form__form_contenedor">
          <div class="tabla">
            <div class="tabla__cabecera">
              <label>SKU</label>
              <label>Nombre</label>
              <label>Cantidad</label>
              <label>Precio</label>
            </div>
            <div>
              <span  class="tabla__cotenido--renglon "v-for=" producto in orden.items">
                <label>{{producto.sku}}</label>
                <label>{{producto.name}}</label>
                <label>{{producto.quantity}}</label>
                <label>{{producto.price}}</label>
              </span>
            </div>
          </div>
          <div class="renglon">
            <button class="button_principal" @click="agregarProducto()">Agregar Producto</button>
         </div>
        </div>


      </div>

  </div>
</template>
<script>
export default {
  name:"form_detalles_productos",
  computed: {
        ver_form() {
            return this.$store.state.forms.ver_orden_form
        },
        orden() {
            return this.$store.state.forms.ver_orden_orden

        }
    },
methods:{
  cerrar(){
    this.$store.commit('forms/closeFormVerOrden')
  },
  agregarProducto(){
    this.$store.commit('forms/openFormAgregarProduto')
  }
}

}
</script>
