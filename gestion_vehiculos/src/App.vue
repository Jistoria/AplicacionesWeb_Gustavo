<script setup>
  import Header from './components/Header.vue';
  import IntoCar from './components/IntoCar.vue';
  import ListCar from './components/ListCar.vue';
  import { ref } from 'vue';
  const ingreso = ref(false);
  const carList = ref([]);
  const maxCarros = 10;
  const verlist = ref(false);
  const puestoscar = [
  'A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'C2'
];
let puestoIndex = 0;
function estaOcupado(puesto) {
  return carList.value.some(carro => carro.puesto === puesto);
}
function generarMatricula() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    let matricula = '';
    for (let i = 0; i < 3; i++) {
      matricula += letras[Math.floor(Math.random() * letras.length)];
    }
    for (let i = 0; i < 3; i++) {
      matricula += numeros[Math.floor(Math.random() * numeros.length)];
    }
    return matricula;
  }
function asignarPuesto() {
  const puestosOcupados = carList.value.map(carro => carro.puesto);
  const puestosDisponibles = puestoscar.filter(puesto => !puestosOcupados.includes(puesto));
  if (puestosDisponibles.length > 0) {
    const puestoAsignado = puestosDisponibles[Math.floor(Math.random() * puestosDisponibles.length)];
    return puestoAsignado;
  } else {
    console.log('Todos los puestos están ocupados.');
    return null; // O puedes manejar este caso de otra manera según tus necesidades
  }
}
function ingresarCar() {
  const newCar = {
    id: Math.floor(Math.random() * 1000) + 1,
    matricula: generarMatricula(),
    puesto: asignarPuesto() // Asigna un puesto aleatorio
  };
  carList.value.push(newCar);
  console.log('Carro ingresado:', newCar);
  ingreso.value = true;
  cambio_screen();
}

function cambio_screen (){
    setTimeout(() => {
      ingreso.value = false; // Cambiar ingreso a falso después de cierto tiempo
    }, 3000); // Cambiar después de 5000 milisegundos (5 segundos)
}


  const login = ref(false);
  const username = ref(null);
  const password = ref('');
  let user ='';
  const showl = ref(false);

  function sublogin() {
    if(password.value == '12345'){
      user = username.value;
      login.value = true;
    }else{
      showl.value = true;
    }
    
  }
  const count = ref(0);
  function removeCar(value){
    const indexToRemove = carList.value.findIndex(car => car.id === value);
  if (indexToRemove !== -1) {
    carList.value.splice(indexToRemove, 1);
    console.log(`Carro con ID ${value} eliminado exitosamente.`);
  } else {
    console.log(`No se encontró ningún carro con ID ${value}.`);
  }
  }
</script>

<template>
  <div>
      <Header :username=user></Header>
      <div v-if="login">
        <!-- <div v-if="mostrarMensaje" class="mensaje">{{ mensaje }}</div> -->
        <button @click="verlist=!verlist" class="custom-button">Ver Carros</button>
        <!-- Lista de carros -->
        <div v-if="verlist">
          <ListCar :Listcar="carList" @remove="removeCar"></ListCar>
        </div>
        <!-- Vista normal -->


        <Transition name="slide-fade" >
          <div v-if="!ingreso" class="container">
              <div class="conteiner-fluid">
                <div class="row change_coso">
                  <div class="col-12 d-flex justify-content-center ">
                    <h1>Actualmente quedan {{  puestoscar.length - carList.length }} PUESTOS </h1>
                    <h2 v-show="puestoscar.length - carList.length===0">No hay mas puestos</h2>
                  </div>
                  <div class="col-12 d-flex justify-content-center">
                    <button @click="ingresarCar()" :disabled="puestoscar.length <= carList.length" class="custom-button">Ingresar</button>
                  </div>
                </div>
              </div>
          </div>
        </Transition>
        
        
        <!-- Vista cuando hay ingreso de carro -->
          <div v-if="ingreso" >
            <IntoCar :car="carList[carList.length - 1]"></IntoCar>
          </div>
          <div class="grid-container " >
            <div v-for="puesto in puestoscar" :key="puesto" class="grid-item" :class="{ 'occupied': estaOcupado(puesto) }">
              Puesto {{ puesto }}
            </div>
          </div>
      </div>
      <!-- linea 132 el v-else -->
      <div v-else>
        <div class="container mt-5 ">
          <div class="row justify-content-center ">
            <div class="col-md-6">
              <div class="card custom-login-bg">
                <div class="card-header">Iniciar Sesión</div>
                <div class="card-body">
                  <p v-show="showl">*Credenciales Inválidas</p>
                  <form>
                    <div class="mb-3">
                      <label for="username" class="form-label">Nombre de Usuario</label>
                      <input type="text" class="form-control" id="username" v-model="username" required>
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">Contraseña</label>
                      <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <div class="d-grid">
                      <button class="btn btn-primary" @click.prevent="sublogin">Iniciar Sesión</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

 .custom-login-bg {
    background-color: #343a40; /* Código de color para gris marino */
    color:#cccccc;
  }
.mensaje {
    position: fixed;
    color: black;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f8f8f8;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 999;
}
  .custom-button {
  margin-top: 20px; /* Espacio entre el h1 y el botón */
  padding: 10px 20px; /* Ajustes de padding según preferencias */
  font-size: 1em; /* Tamaño de fuente del botón */
  background-color: #ff3300 ; /* Color de fondo */
  color: #ffffff; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambiar cursor al pasar por encima */
  transition: background-color 0.3s; /* Transición de color de fondo */
}

.custom-button:disabled {
  background-color: #cccccc; /* Color de fondo cuando está deshabilitado */
  cursor: not-allowed; /* Cursor de "no permitido" cuando está deshabilitado */
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.grid-container {
  max-width: 70%; /* Ajusta según tus necesidades */
  margin: 0 auto; /* Para centrar la cuadrícula en la página */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
}

.grid-item {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}

.occupied {
  background-color: #ff0000;
  color: #ffffff;
}
.base_in{
  width: 700px;
  height: 200px;
}
</style>
