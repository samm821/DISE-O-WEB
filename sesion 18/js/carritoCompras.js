function agregarProducto(id, nombre, precio, imagen) {
    var datos = {
        'nombre': nombre,
        'precio': precio,
        'cantidad': 1,
        'imagen': imagen,
    };

    if(localStorage.length === 0){
        localStorage.setItem(id, JSON.stringify(datos));        
    }
        else{
            var repetido=false;
            for (var i=0; i<localStorage.length; i++){
                var key = localStorage.key(i);
                if(key ===id){
                    repetido=true;
                }
            }
            if(repetido){
                var producto=localStorage.getItem(id);
                datos = JSON.parse(producto);
                datos.cantidad +=1;
                localStorage.setItem(id, JSON.stringify(datos) );
              }  else{
                  localStorage.setItem(id, JSON.stringify(datos)); 
              }     
        }
    actualizarDatos();   
}

function eliminarDatos(id) {
    localStorage.removeItem(id);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos(); 
}

function actualizarDatos() {
    var fila = "";
   
    if(localStorage.length === 0){
        fila='<tr><td colspan="4">vacio </tr></td>';
    }
        else{
            for (var i=0; i<localStorage.length; i++){
                var key = localStorage.key(i);
                var datos = localStorage.getItem(key);
                datos = JSON.parse(datos);

                fila +='<tr id="producto'+key+'"><td> <img src="'+datos.imagen+'" alt="producto"></td>'+
                        '<td>'+datos.nombre+'</td>'+
                        '<td>'+datos.precio+'</td>'+
                        '<td class="productosCarrito"> <div>'+
                        '<button class="btnspinner" onclick="spinnerMenos('+key+')">-</button>'+
                        '<div>'+datos.cantidad+'</div>'+
                        '<button class="btnspinner" onclick="spinnerMás('+key+')">+</button>'+
                        '</div></td><td><button>'+
                        '<img src="/sesion 18/img/eliminar.png" alt="eliminar" onclick="eliminarDatos('+key+')">'+
                        '</button></td></tr>';        
            }
        }
    document.getElementById("agregados").innerHTML=fila;
    calcularTotal(); 
}

function calcularTotal() {
    var total=0;
    if(localStorage.length != 0){
        for (var i=0; i<localStorage.length; i++){
            var key = localStorage.key(i);
            var datos = localStorage.getItem(key);
            datos = JSON.parse(datos);
            
            total += parseInt(datos.cantidad)*parseFloat(datos.precio);                    
        }
    }
    document.getElementById("total").innerHTML=total;
}

function spinnerMás(id) {                      
    var producto=localStorage.getItem(id);
    datos = JSON.parse(producto);

    datos.cantidad +=1;

    localStorage.setItem(id, JSON.stringify(datos) );    

    actualizarDatos();
    calcularTotal(); 
}

function spinnerMenos(id) {
    var producto=localStorage.getItem(id);
    datos = JSON.parse(producto);

    datos.cantidad -=1;
    
    localStorage.setItem(id, JSON.stringify(datos) );    

    actualizarDatos();
    calcularTotal();
}

