function Mostrar()
{

	var flag = 0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do {
		numero = parseInt(prompt("ingrese su numero: "));

		while (isNaN(numero)){
		 numero = parseInt(prompt("Eso no es un numero"));
	 } 
	 if (numero >= 0){
		 positivo = positivo + numero;
	 }
	 else {
		flag = 1;

		 negativo = negativo * numero;

		 
	 }

	 respuesta = prompt("Desea continuar?");
	 } while (respuesta == "s" || respuesta == "S");

document.getElementById('suma').value=positivo;
if (flag == 0){
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN