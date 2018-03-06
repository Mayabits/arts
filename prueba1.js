$("#maparea").hover(function() {
$( ".mapa" ).fadeIn( 500 );
});  
function init() {
    console.log("DOM Cargado");
}
//$("document").ready(init);
    
/*___

 $("#b1").click(botonPulsado);
    $("#b1").on("click",function (){
        console.log("Click molón!"); 
    });
    $("#b1").off("click",botonPulsado);
    $("#b1").off("click");
    $("#login").submit(gestionaFormulario);
}
$(document).ready(init);
____

$("#maparea").toggleClass("mapa");
$("mapa").fadeIn("slow");

function mostrarmapa(evento){
        evento.preventDefault();
        console.log("mostrando mapa");
        
};

function init() {
    console.log("DOM Cargado");
 $("mapa").mouseenter(mostrarmapa);
     $("#maparea").on("mouseenter",function (){
        console.log("Un toque mágico"); 
    $("#mapa").fadeIn("slow");
    });
    
    */