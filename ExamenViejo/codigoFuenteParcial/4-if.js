//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1
    var numero2
    var resultado

    numero1 = parseInt(prompt("Ingrese el primer numero"));
    numero2 = parseInt(prompt("Ingrese el segundo numero"));

    while (isNaN(numero1)||isNaN(numero2)){
        alert("Numero invalido")
        numero1 = parseInt(prompt("Ingrese el primer numero"));
        numero2 = parseInt(prompt("Ingrese el segundo numero"));
    }
    if(numero1 == numero2){
resultado = numero1 * numero2;
document.write("El producto es " + resultado);
    }
    else if(numero1 > numero2){
        resultado = numero1 - numero2;
        document.write("El resultado de la resta es: " + resultado)

    }
    else{
        resultado = numero1+numero2;
        document.write("El resultado de la suma es: " +resultado)
    }

}

