function validaForma() {
    let x = document.forms["Comentarios"]["comentario1"].value;
    if (x == "") {
        alert("Por favor agrega tu comentario")
        return false;
    }
    
}