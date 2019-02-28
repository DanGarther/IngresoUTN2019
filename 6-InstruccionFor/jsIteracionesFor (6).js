function Mostrar()
{
var i
var numero
var contador = 0

numero = parseInt(prompt("Ingrese un numero positivo"));
 while (numero <= 0|| isNaN(numero)){
    numero = parseInt(prompt("Ingrese un numero positivo"));
    }

    for(var i=1; i<= numero; i++){
if(i%2==0){
    contador++;
    console.log(i);
}
    }

   console.log("Cantidad de pares: " + contador)

}
//FIN DE LA FUNCIÓN