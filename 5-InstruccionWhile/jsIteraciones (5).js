function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


    while (sexo == "f" && sexo == "m" && sexo == "F" && sexo == "M"){

        sexo = prompt("Error.")

    }

if (sexo == "f" || sexo == "F"){

    document.getElementById('Sexo').value = "Femenino";
}

else {

    document.getElementById('Sexo').value = "Masculino"
}

}//FIN DE LA FUNCIÓN