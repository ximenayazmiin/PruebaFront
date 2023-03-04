<template lang="es">
<div class="cont_form" v-if="ver_form">
    <div class="cont_form__form">
        <span class="cont_form__form_cabecera">
            <p>Agregar producto</p>
            <button @click="cerrar()" class="cont_form__form_cabecera--cerrar"> X </button>
        </span>
        <div class="cont_form__form_contenedor">
            <div>
                <section class="col_2">
                    <label class="field"> SKU <input placeholder="Min 5 caracteres" v-model="sku" type="text"> </label>
                    <label class="field"> Nombre <input v-model="nombre" type="text"></label>
                </section>
                <section class="col_2">
                    <label class="field"> Cantidad <input min="1" v-model="cantidad" type="number"> </label>
                    <label class="field"> Precio<input min="1" v-model="precio" type="number"></label>
                </section>
            </div>
            <section class="renglon">
                <button @click="guardar()" class="button_principal">Guardar</button>
            </section>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "form_agregar_producto",
    data() {
        return {
            sku: null,
            nombre: null,
            cantidad: 1,
            precio: 1,
            datos_validos:false
        }
    },
    computed: {
        ver_form() {
            return this.$store.state.forms.ver_agregar_producto
        },
    },
    methods: {
        cerrar() {
            this.$store.commit('forms/closeFormAgregarProducto')
        },
        mensaje(mensaje,estado) {
            this.$buefy.notification.open({
                message: mensaje,
                type:estado? 'is-primary': 'is-danger',
                pauseOnHover: true,
            })
        },
        validarCampos(){
          if(this.sku != null && this.sku.length > 5){
            if(this.nombre != null && this.nombre.length > 5){
                this.datos_validos = true;
            }
            else{ this.mensaje('Dato de nombre no valido,favor de verificar dato')  }
          }
          else{ this.mensaje('Dato de  SKU no valido,favor de verificar dato')  }

        },
        guardar(){
          this.validarCampos();
          if(this.datos_validos){
            var producto = {
            sku:this.sku,
            name:this.nombre,
            quantity:this.cantidad,
            price:this.precio,
          }
          this.$store.commit('forms/agregarProductoOrden', producto)

          }

        }
    }

}
</script>
