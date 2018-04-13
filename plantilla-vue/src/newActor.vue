
<template>
  <div id="cajanuevo"  class="center" >
      <h2 id="titulo">Nuevo actor</h2>
      <br>
      <div>
        <h3 id="nombres">Nombre</h3>
        <input type="text" name="nombre" placeholder="Ingrese Nombre" v-model="actor.firstName" required>
      </div>
      <br>
      <div>
        <h3 id="nombres">Apellido</h3>
        <input type="text" name="Apellido" placeholder="Ingrese Apellido" v-model="actor.lastName" required>
      </div>
      <br>
      <button v-on:click.prevent="post" type="submit" name="agregar"> Aceptar </button>
  </div>
</template>



<script>
export default {
  data(){
    return{
      actor:{
        firstName:'',
        lastName:'',
      }
    }
  },
  methods: {
    post:function(){
      var actor = this.actor
      this.actor = {firstName:'' , lastName:''}
      this.$http.post('http://localhost:8081/actors/create', actor
      ).then(function(data){
        console.log(data);
      },response => {
    // error callback
      });
    }
  }
}
</script>
  







