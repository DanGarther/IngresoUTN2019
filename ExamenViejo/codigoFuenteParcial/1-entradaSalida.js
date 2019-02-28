//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var base
    var formula

base = document.getElementById("lado").value;

if(isNaN(base) || base <= 0){

    alert("Eso no es un numero valido")
}
else{
formula = base * 3;

alert("El perimetro es: " + formula);

	
}
}
