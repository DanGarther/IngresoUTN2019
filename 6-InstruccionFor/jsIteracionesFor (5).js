function Mostrar()
{

    var numero
    
    for(;;)
    {
numero = parseInt(prompt("ingrese un numero"))
while(isNaN(numero)){
    numero=parseInt(prompt("Eso no es un numero"))
}
    if(numero == 9){
        break
    }
}


}//FIN DE LA FUNCIÓN