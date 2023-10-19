<script setup>
    defineProps({
        car: Object
    })
</script>

<template>
  <div class="base_car container-fluid">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="mb-3">
        <h1 class="text-center mb-4">Carro Ingresado con la matricula {{ car.matricula }} --- ID: {{ car.id }}</h1>
      </div>

      <div class="image-container">
        <img src="/src/components/image/7334040a422c9d1ae4e20e58d2417510-veha-culo-de-transporte-retro-coche.png" alt="carrito" class="centered-image">
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; 
}

.centered-image {
  max-width: 100%; 
  max-height: 100%; 
}

.base_car {
  width: 700px;
  margin: 10px auto; 
}
</style>
