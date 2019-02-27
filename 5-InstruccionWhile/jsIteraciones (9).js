function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta;

	do {
		numero = parseInt(prompt("ingrese su numero: "));

		while (isNaN(numero)){
		 numero = parseInt(prompt("Eso no es un numero"));
	 } 
	 if (contador == 0){
		 maximo = numero;
		 minimo = numero;
	 }
	 if (numero > maximo){
		 maximo = numero;
	 }
	 if (numero < minimo){
		 minimo = numero;
	 }

contador ++;
	 respuesta = prompt("Desea continuar?");
	 } while (respuesta == "s" || respuesta == "S");

	 document.getElementById('maximo').value=maximo;
	 document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN