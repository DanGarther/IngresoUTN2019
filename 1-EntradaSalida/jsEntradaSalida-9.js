/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var num1
var num2
var num3
var num4

num1 = document.getElementById("sueldo").value
num1 = parseInt(num1)

num2 = num1 * 10
num2 = parseInt(num2)

num3 = num2 / 100
num3 = parseInt(num3)

num4 = num1 + num3
num4 = parseInt(num4)



document.getElementById("resultado").value = num4

alert(num3)

	
}
