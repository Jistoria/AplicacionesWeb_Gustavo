document.getElementById('show-more-edu').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace recargue la página

    var elementsEdu = document.getElementById('elements-edu');

    if (elementsEdu.style.display === 'none') {
        elementsEdu.style.display = 'block';
        this.innerText = 'Ver menos';
    } else {
        elementsEdu.style.display = 'none';
        this.innerText = 'Ver más';
    }
});

document.getElementById('show-references').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace recargue la página

    var elementsreferences = document.getElementById('references');

    if (elementsreferences.style.display === 'none') {
        elementsreferences.style.display = 'block';
        this.innerText = 'Ocultar';
    } else {
        elementsreferences.style.display = 'none';
        this.innerText = 'Ver Referencias';
    }
});