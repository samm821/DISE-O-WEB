//mostrar un mensaje de salida de la pagina
$(document).ready(function(){
    $("a").click(function(evento) {
        alert("has pulsado el enlace. ahora saldras a la pagina de la USAT");
    });
});

//ocultar o mostrar el menu
$("#btnOcultarMostar").click(function () {
    $("#cajamenu").toggle(1500);
    },
    function () {
        $("#cajamenu").toggle(1500); 
});