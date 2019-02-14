function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;

if(edad>=13&&edad<=17)
{

    alert("Es un adolecente");

}
else if (edad < 13)
{
    alert("Es un niño");

}
else if(edad > 17)
{
    alert("Es un adulto");
}


}//FIN DE LA FUNCIÓN
