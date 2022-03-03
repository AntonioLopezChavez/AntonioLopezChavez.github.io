var inp = document.getElementById('Inputs');
var x = document.getElementById('comentario');

inp.addEventListener('submit', function(a) {
    a.preventDefault();
    if (x.value === null || x.value === '') {
        alert('Por favor agrega tu comentario');
    }
    
    
});