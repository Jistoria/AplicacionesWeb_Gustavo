<template>

    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                <div class="card-header">Iniciar Sesión</div>
                <div class="card-body">
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
                            <button class="btn btn-primary" @click.prevent="alogin">Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
const username = ref('');
const password = ref('');
function alogin() {
  // Emitir el evento de inicio de sesión al componente padre
    this.$emit("login");
}

</script>

<style scoped>
  /* Puedes añadir estilos personalizados aquí si es necesario */
</style>

