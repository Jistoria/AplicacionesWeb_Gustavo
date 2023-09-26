
const enviar = document.getElementById('enviar');

enviar.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    const listaResultados = document.getElementById('resultados');
    listaResultados.innerHTML = '';

    for(var i = 0; i < 5; i++){
        var resultado;
        switch(i){
            case 0:
                resultado = num1 + num2;
                listaResultados.innerHTML += `<li>En la PRIMERA iteración: ${num1} + ${num2} = ${resultado}</li>`;
                break;
            case 1:
                resultado = num1 - num2;
                listaResultados.innerHTML += `<li>En la SEGUNDA iteración: ${num1} - ${num2} = ${resultado}</li>`;
                break;
            case 2:
                resultado = num1 * num2;
                listaResultados.innerHTML += `<li>En la TERCERA iteración: ${num1} * ${num2} = ${resultado}</li>`;
                break;
            case 3:
                resultado = num1 / num2;
                listaResultados.innerHTML += `<li>En la CUARTA iteración: ${num1} / ${num2} = ${resultado}</li>`;
                break;
            case 4:
                resultado = num1 % num2;
                listaResultados.innerHTML += `<li>En la QUINTA iteración: ${num1} % ${num2} = ${resultado}</li>`;
                break;
            default:
                console.log("Error");
                break;
        }
    }
});
