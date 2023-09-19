function validarContrasenas() {
    var password = document.getElementById("password").value;
    var r_password = document.getElementById("confirme_password").value;
    var err_p = document.getElementById("err_p");
    if (password !== r_password) {
        err_p.textContent = "Las contraseñas no coinciden";
        return false; // No coinciden, retorna false
    } else if(password === '') {
        err_p.textContent = "Ingrese una contraseña";
        return false; // Contraseña está vacía, retorna false
    } else if(password.length < 8) {
        err_p.textContent = "La contraseña debe tener al menos 8 caracteres";
        return false; // Contraseña no cumple con el requisito mínimo de longitud, retorna false
    } else {
        err_p.textContent = ""; // Limpiar el mensaje de error
        return true; // Contraseñas coinciden y cumplen los requisitos, retorna true
    }
}

document.getElementById("form-cliente").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    var esValido = validarContrasenas();
    var datos = obtenerNombreYEmail();
    if(esValido && datos !=false){
        // Aquí puedes realizar la acción de registro, por ejemplo:
        console.log("Registro exitoso!");
        console.log("Nombre:", datos.nombre);
        console.log("Email:", datos.email);
        var verif = true
        mostrarNombre(verif);
    }
});



function obtenerNombreYEmail() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var err_d = document.getElementById("error_d");
    if(nombre === '' && email === ''){
        err_d.textContent = 'Ingrese los datos marcados con *';
        return false;
    }
    return {nombre, email};
}
function mostrarNombre(verif){
    var resultado = obtenerNombreYEmail();
    var elemento = document.getElementById("register");
    var buttonRegister = document.getElementById("button-register");
    if(resultado){
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = resultado.nombre + "   ";
    }
    if(verif){
        buttonRegister.setAttribute("data-bs-toggle", "modal");
        buttonRegister.setAttribute("data-bs-target", "#exampleModal");
        $('#exampleModal').modal('show');
    }else{
    }
}



// Obtener el enlace "Regístrate" y el div oculto que contiene el formulario

const formularioDiv = document.querySelector('div[hidden]');

// Agregar un manejador de eventos al enlace "Regístrate"
document.getElementById("show-register").addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    formularioDiv.removeAttribute('hidden'); // Mostrar el formulario al quitar el atributo 'hidden'
});

