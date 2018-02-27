//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero=0, contNum=0, contPar=0, promedio=0, suma=0, max=0, min=0, inicio=true;
	while(true)
	{
		numero = prompt("Ingrese un nùmero o cancele para finalizar")
		if(numero == null)
		{
			break;
		}
		else if (isNaN(numero))
		{
			alert("Entrada invàlida")
			continue;
		}
		numero = parseInt(numero)
		console.log(numero)
		if (inicio == true)
		{
			min = numero
			max = numero
			inicio = false
		}
		else
			if (numero < min)
			{
				min = numero
			}
			else if (numero > max)
			{
				max = numero
			}
				if(numero % 2 == 0)
				{
					contPar++
				}
		suma = suma + numero
		contNum++
	}
	promedio = suma	/ contNum
	console.log("Cantidad de pares "+contPar)
	console.log("Promedio de los nùmeros ingresados "+promedio)
	console.log("La suma de los nùmeros da "+suma)
	console.log("El nùmero min es "+min + " y el màximo "+max)
}

