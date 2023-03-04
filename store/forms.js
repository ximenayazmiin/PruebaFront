export const state = () => ({
  ver_orden_form:false,
  ver_orden_orden:null,
  ver_agregar_producto:false,



})
export const mutations = {
  openFormVerOrden(state,orden){
    state.ver_orden_form=true
    state.ver_orden_orden=orden
  },
  closeFormVerOrden(state){
    state.ver_orden_form=false,
    state.ver_orden_product=null
  },
  openFormAgregarProduto(state){
    state.ver_agregar_producto=true
  },
  agregarProductoOrden(state,producto){
    state.ver_orden_orden.items.push(producto)
    state.ver_agregar_producto=false
    },
    closeFormAgregarProducto(state){
      state.ver_agregar_producto=false
    }
}
