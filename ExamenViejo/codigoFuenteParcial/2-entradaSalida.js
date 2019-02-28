//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
var precio
var precioFinal

precio = parseInt(prompt("Ingrese precio del producto"));

while (isNaN(precio) || precio <= 0){
    
        precio = parseInt(prompt("Eso no es un numero valido"))}

       
precioFinal = (precio*21/100) + precio;

document.getElementById("importe").value = precioFinal;
        
}

