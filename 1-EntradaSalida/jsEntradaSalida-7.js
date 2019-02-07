/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


var num1    
var num2

function sumar()
{
  
    num1 = document.getElementById("numeroUno").value
    num1 = parseInt(num1)
    
    num2 = document.getElementById("numeroDos").value
    num2 = parseInt(num2)
    alert(num1 + num2)	
	
}

function restar()
{
    num1 = document.getElementById("numeroUno").value

    
    num2 = document.getElementById("numeroDos").value

    alert(num1 - num2)
	
}

function multiplicar()
{ 
	
    
    num1 = document.getElementById("numeroUno").value
 
    
    num2 = document.getElementById("numeroDos").value
   
    alert(num1 * num2)
}

function dividir()
{
	
    
    num1 = document.getElementById("numeroUno").value
    
    
    num2 = document.getElementById("numeroDos").value
    
    alert(num1 / num2)
}

