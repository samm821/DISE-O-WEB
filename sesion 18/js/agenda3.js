function guardarDatos() {
    const nombre = document.getElementById("nombre").value; 
    const celular = document.getElementById("celular").value; 
    const correo = document.getElementById("correo").value; 
    
    const datos = {
        'celular': celular,
        'correo': correo,
    };

    localStorage.setItem(nombre, JSON.stringify(datos));

    document.getElementById("nombre").value =""; 
    document.getElementById("celular").value =""; 
    document.getElementById("correo").value ="";
    actualizarDatos();    
}

function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    var datos = JSON.parse(localStorage.getItem(nombre));
    document.getElementById("celular").value=datos.celular ;
    document.getElementById("correo").value=datos.correo ;

}

function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var fila = "";
   
    if(localStorage.length === 0){
        fila='<li>vacio </li><br>';
    }
        else{
            for (var i=0; i< localStorage.length; i++){
                var key = localStorage.key(i);
                alert(key);
                var datos = localStorage.getItem(key);
                datos = JSON.parse(datos);
 
                fila +='<tr><td>'+key+'</td>'+
                        '<td>'+datos.celular+'</td>'+
                        '<td>'+datos.correo+'</td></tr>';
                        alert(fila)          
            }
        }
    document.getElementById("registros").innerHTML=fila;
}