//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho
    var altura
    var formula

ancho = document.getElementById("ancho").value;
altura = document.getElementById("largo").value;

if(isNaN(ancho) || ancho <= 0){
    
        alert("Eso no es un numero valido")}

   else if(isNaN(altura) || altura <= 0){

    alert("Eso no es un numero valido")
   }
   else {
formula = 2*(ancho+altura);

alert("Se necesitan: " + formula*6 + "m de alambre");
   }
}

