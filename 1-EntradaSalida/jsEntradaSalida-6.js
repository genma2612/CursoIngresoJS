/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero = document.getElementById("numeroDos").value;
    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);
    resultado = primerNumero + segundoNumero;
    // Tambien podrìa ser : resultado = parseInt(primerNumero, 10) + parseInt(segundoNumero, 10);
    alert("La suma es " + resultado);

}

