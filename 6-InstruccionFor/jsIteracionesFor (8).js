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
    if(numero%i==0){
        contador++;
        console.log(i);
    }
        }
    
       if(contador<=2){
           alert("Es numero primo")
       }
       else{
           alert("No es numero primo")
       }


}//FIN DE LA FUNCIÓN