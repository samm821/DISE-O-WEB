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
 
                fila +='<tr><td> <img src="'+datos.imagen+'" alt="producto"></td>'+
                        '<td>'+datos.nombre+'</td>'+
                        '<td>'+datos.precio+'</td>'+
                        '<td> <input type="number" value="'+datos.cantidad+'" class="cantidad"></td>'+
                        '<td><button><img src="/sesion 18/img/eliminar.png" alt="eliminar" onclick="eliminarDatos('+
                        (key)+')"></button></td>';          
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

function llenarMenu() {
    const productos =[{
        'nombre': 'frappe de Mocca',
        'precio': '16.50',
    },
    {
        'nombre': 'frappe de Vainilla',
        'precio': '14.50',
    },
    {
        'nombre': 'affogato',
        'precio': '10.50',
    },
    {
        'nombre': 'Té Helado',
        'precio': '11.50',
    },
    {
        'nombre': 'frappe de Maracuyá',
        'precio': '19.50',
    },
    {
        'nombre': 'frappe de Oreo',
        'precio': '15.50',
    }
    ];

    var menu="";

    for(var i=0; i<productos.length; i++){
        alert(i);
        menu+='<div class="productos" id="p'+i+'">'+
        '<img src="/sesion 18/img/'+(i+1)+'.png" alt="producto"><br>'+
        '<span id="nombre'+i+'">'+productos[i].nombre+'</span><br>'+
        '<span id="precio'+i+'">'+productos[i].precio+'</span><br>'+
        '<button onclick="agregarProducto("'+i+'","'+productos[i].nombre+'","'+productos[i].precio+
        '","/sesion 18/img/'+(i+1)+'.png")">agregar al carrito</button></div>';
        alert(productos[i].nombre+'  '+productos[i].precio);
    }
    document.getElementById("menu").innerHTML=menu;
    actualizarDatos();
}

