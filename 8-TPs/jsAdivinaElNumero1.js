/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  numeroSecreto = Math.floor(Math.random() * (101 - 1)) + 1;
  console.log(numeroSecreto);
  contadorIntentos = 0;                                               //  para que siempre 
  document.getElementById("intentos").value = contadorIntentos;       //  comience con 0 intentos
}

function verificar()
{
  var numeroIngresado;
  contadorIntentos = contadorIntentos + 1;
  numeroIngresado = document.getElementById("numero").value;
  document.getElementById("intentos").value = contadorIntentos;
  if(numeroIngresado == numeroSecreto && contadorIntentos == 1){
    alert("Acertaste a la 1ra? Habrás hecho trampa! comenzá de nuevo.")

  }
  else if(contadorIntentos > 10){
    //numeroSecreto = null
    alert("Alcanzaste el máximo de intentos, comenzá de nuevo.")
    contadorIntentos = 11;                                            //  Para que no siga
    document.getElementById("intentos").value = contadorIntentos;     //  aumentando el contador.
  }
  else if(numeroIngresado == numeroSecreto ){
    alert("Ganaste con " + contadorIntentos + " intentos!")
  }
  else if(numeroIngresado < numeroSecreto){
    alert("Perdiste! El numero secreto es mayor.")
  }
  else if(numeroIngresado > numeroSecreto){
    alert("Perdiste! El numero secreto es menor.")
  }
}
