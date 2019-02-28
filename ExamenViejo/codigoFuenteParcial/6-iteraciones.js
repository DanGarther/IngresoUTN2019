//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
    var importe;
    var maximo;
    var minimo;
var diaMax
var diaMin
var flag = 0
   
for(var i = 1; i <=7; i++){

    importe = parseInt(prompt("Ingrese importe del dia "))

    while(isNaN(importe)||importe<0){
        numero = parseInt(prompt("Ingrese un importe valido"))
    }
   
if(importe >maximo || flag == 0){
    maximo = importe
    diaMax = i
}

if(importe <minimo || flag == 0){
minimo = importe
diaMin = i
flag = 1
}

    }
    alert("El dia " + diaMax + " hubo un maximo de " +maximo + " y el dia " + diaMin + " hubo un " + minimo)
}

