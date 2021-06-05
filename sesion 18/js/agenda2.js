function guardarDato() {
    var nombre= document.getElementById("nombre").value;  
    var celular= document.getElementById("celular").value;  
    localStorage.setItem(nombre,celular);
    document.getElementById("nombre").value="";
    document.getElementById("celular").value="";
    actualizarDatos();    
}

function recuperarDato() {
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("celular").value=localStorage.getItem(nombre);
}

function eliminarDato() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    if(localStorage.length === 0){
        registro +='<li>Vacío</li>';
    } else{
        for (var i=0; i<= localStorage.length -1; i++){
            var key = localStorage.key(i);
            registro +='<li>'+'<span class="nom">'+key+'</span>'
            +'<span class="nom">'+localStorage.getItem(key)+'</span>'
            +'</li><br>';
        }
    }
    document.getElementById("contactos").innerHTML=registro;
}