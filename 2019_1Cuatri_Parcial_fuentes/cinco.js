/*Bienvenidos (SOLO SWITCH). 
una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de dias , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es america tiene un 50% de descuento y si ademas paga por debito se le agrega un 10% mas de descuento 
Si es africa tiene un 60% de descuento y si ademas paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es europa tiene un 20% de descuento y si ademas paga por debito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
    var lugar;
    var pago;
    var dia;
    var total;
    var base;
var descuento;
var totalConDes;
var porcentaje;
var text = "descuento";

    base = 100;

    dia = parseInt(prompt("Ingrese cantidad de dias que desea vacacionar."));
    while(isNaN(dia) || dia <= 0 ){
        dia = parseInt(prompt("Por favor ingrese una cantidad valida"));
    }
    
lugar = document.getElementById("Continente").value;
pago = document.getElementById("MedioDePago").value;
 total = (base*dia);

    switch(lugar){

        case "América":

        switch(pago){

          case "Débito":
         
          porcentaje = 60;

         
          break;

          default:

          porcentaje = 50;


        }
        break;

        case "África":

        switch(pago){

    case "Débito":
        
          porcentaje = 60;

          break;

          default:
         
          porcentaje = 75;
          
        break;
        }

break;

        case "Europa":
        switch(pago){
    case "Débito":
        
          porcentaje = 35;

          break;

          case "MercadoPago":
          
            porcentaje = 30;
      
            break;

          default:
         
          porcentaje = 25;
        break;
        }
       
    break;
    
 default:

 porcentaje = -20
 text = "aumento"
}
descuento = (total*porcentaje)/100;
 totalConDes = total - descuento;

 alert("Precio sin descuento: $" + total + "\nPorcentaje de " + text + ": " + Math.abs(porcentaje) + "%" + "\nPrecio con descuento: $" + totalConDes);

}
