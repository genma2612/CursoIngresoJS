function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero;
	//respuesta = confirm("Ingresar nùmero?");
	while(respuesta)
	{
		numero = prompt("Ingrese nùmero a sumar o presione cancelar para finalizar.");
		if(numero == null)
		{
			break
		}
		// si cancela, termina el programa sumando y promediando, si hubiesen numeros ingresados.
		else if(isNaN(numero))
		//else if(isNaN(numero) == true) ----> redundancia isNaN(numero) ya devuelve valor "true"
		{
			alert("Entrada incorrecta, ingrese un nùmero")
			continue
		}
		// si el valor ingresado no es un nùmero, vuelve a pedir nuevamente la entrada.
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador++
		//respuesta = confirm("Seguir integrando numeros?");
		//console.log(contador)
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}