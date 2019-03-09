function mostrar()
{
var num;
var letra;
var respuesta;
var contadorPar = 0;
var acumuladorPar = 0;
var contadorImpar = 0;
var contadorCero = 0; 
var contadorPos = 0;
var acumuladorPos = 0;
var promedioPos = 0;
var acumuladorNeg = 0;
var max = 0;
var min = 0;
var letMax;
var letMin;
var flag = 0;
do{
    letra = prompt("Ingrese una letra");
    num = parseInt(prompt("Ingrese un numero."));
    while (isNaN(num) || num <=-101 || num >= 101 ){
        num = parseInt(prompt("Ingrese un numero valido por favor"));
    }

    if(num%2==0 && num>0){

    contadorPar++;

    }


   else{
contadorImpar++;
    }
    

    if (num==0) {
        contadorCero++;
    }

if(num>0){
    acumuladorPos= acumuladorPos + num

    contadorPos++
    
    promedioPos=acumuladorPos/contadorPos
}

else if(num<0){
    acumuladorNeg = acumuladorNeg - num
}

if(flag == 0||num>max){
max = num
letMax = letra
flag = 1
}

if(flag== 0||num<min){
    min = num
    letMin= letra
    flag=1
    }

 
  
respuesta = prompt("Desea seguir añadiendo?");
}


while(respuesta == "s" || respuesta == "si")

document.write("Pares: " + contadorPar + "<br>");
document.write("Impares: " + contadorImpar+ "<br>");
document.write("Ceros: " + contadorCero+ "<br>");
document.write("Promedio positivo: " + promedioPos+ "<br>");
document.write("Suma de negativos: " + acumuladorNeg+ "<br>");
document.write("Max: " + max + letMax+ "<br>");
document.write("Min: " + min + letMin+ "<br>");
}
