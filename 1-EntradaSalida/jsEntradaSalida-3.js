/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    
    nombre = document.getElementById("elNombre").value;

    alert(nombre);

}
/* Para obtener un dato ID usamos document.getElementById("elNombre").value; 
document. = Es para comunicarse con el archivo .html
getElementById("Nombre de la ID") = Es para declarar el dato que estamos buscando
.value = Es para validar ese dato que estamos pidiendo*/