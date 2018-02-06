/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    resultado = parseInt(primerNumero, 10) + parseInt(segundoNumero, 10);
    alert("La suma es " + resultado);
	
}

function restar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    resultado = parseInt(primerNumero, 10) - parseInt(segundoNumero, 10);
    alert("La resta es " + resultado);
	
}

function multiplicar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    resultado = parseInt(primerNumero, 10) * parseInt(segundoNumero, 10);
    alert("La multiplicación es " + resultado); 
	
}

function dividir()
{
    var primerNumero;
    var segundoNumero;
    var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    resultado = parseInt(primerNumero, 10) / parseInt(segundoNumero, 10);
    alert("La división es " + resultado);
	
}

