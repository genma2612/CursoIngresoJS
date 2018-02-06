/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*Las variables fuera de las funciones seràn "universales" o sea, tomadas por todas
las funciones)*/
var primerNumero;
var segundoNumero;
var resultado;
function sumar()
{
    //var primerNumero;
    //var segundoNumero;
    //var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    resultado = primerNumero + segundoNumero;
    //resultado = parseInt(primerNumero, 10) + parseInt(segundoNumero, 10);
    alert("La suma es " + resultado);
	
}

function restar()
{
    //var primerNumero;
    //var segundoNumero;
    //var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    resultado = primerNumero - segundoNumero;
    //resultado = parseInt(primerNumero, 10) - parseInt(segundoNumero, 10);
    alert("La resta es " + resultado);
	
}

function multiplicar()
{
    //var primerNumero;
    //var segundoNumero;
    //var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    resultado = primerNumero * segundoNumero;
    //resultado = parseInt(primerNumero, 10) * parseInt(segundoNumero, 10);
    alert("La multiplicación es " + resultado); 
	
}

function dividir()
{
   // var primerNumero;
   // var segundoNumero;
   // var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    resultado = primerNumero / segundoNumero;
    //resultado = parseInt(primerNumero, 10) / parseInt(segundoNumero, 10);
    alert("La división es " + resultado);
	
}

