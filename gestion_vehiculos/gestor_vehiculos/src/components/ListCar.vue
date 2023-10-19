<script setup>
defineProps(["Listcar"]);
const emit = defineEmits(['remove']);

function remove(id) {
  emit('remove',id);
}
</script>

<template>
  <div v-if="Listcar && Listcar.length > 0" class="base_list">

    <ul hidden>
        <li v-for="car in Listcar" :key="car.id">
            <h3> ID: {{ car.id }}, Matrícula: {{ car.matricula }} Puesto: {{ car.puesto }}</h3> <button @click="remove(car.id)">Sale Carro</button>
        </li>
    </ul>
    <div class="container-fluid">

      <div class="row border_bot_list" v-for="car in Listcar" :key="car.id">
        <div class="col-3">

            <h3 class="btn btn-danger tamano_a">ID:</h3>
            <div class="d-inline-block mt-2"><a class="tamano_b "> {{ car.id }}</a></div>
        </div>
        <div class="col-3">
          <h3 class="btn btn-danger tamano_a"> Matrícula:</h3>
          <div class="d-inline-block mt-2"><a class="tamano_b ">  {{ car.matricula }} </a></div>

        </div>
        <div class="col-3">
          <h3 class="btn btn-danger tamano_a">Puesto:</h3>
          <div class="d-inline-block mt-2"><a class="tamano_b ">   {{ car.puesto }} </a></div>

        </div>
        <div class="col-3">
          <button @click="remove(car.id)" class="btn btn-danger tamano_c">Sale Carro</button>
        </div>
      </div>

    </div>

  </div>
  <div v-else>
    <h2>No hay carros</h2>
  </div>
</template>

<style scoped>
/* Estilos aquí si es necesario */

.border_r{
  border: 5px solid red;
}
.tamano_a{
width: 150px;
height: 70px;
font-size: 30px;
}
.tamano_b{
 font-size: 40px;
 text-decoration: none;
 padding-left: 10px;
 color: black;
}
.tamano_c{
  width: 150px;
  height: 70px;
  font-size: 20px;
  margin-top: 10px;
}

.tamano_c:hover{
  background-color: orange;
  border: orange;
}
.base_list{
  border: 1px solid red;
  border-radius: 15px;
}
.border_bot_list{
  border-bottom: 1px solid red;
  border-radius: 15px;
}
</style>
