function Mostrar()
{
	var numero;
	var contadorMaestro=0;
	var contadorPosi=0; 
	var contadorNega=0;
	var contadorCero=0;
	var contadorPar=0;
	var positivo=0;
	var negativo=0;
	var promedioPosi
	var promedioNega
	var respuesta=true;
	while(respuesta)
	{
		numero = prompt("Ingresar numeros o cancelar para finalizar.")
		if(numero == null)
		{
			break
		}
		// Terminación del programa al clickear "Cancelar", recogiendo datos acumulados
		else if(isNaN(numero))
		{
			alert("Entrada incorrecta, ingrese un nùmero o cancele para salir")
			continue
		}
		// Error si el user ingresa un datos que no sean números
		numero = parseInt(numero);
			if(numero % 2 == 0 && numero != 0)
			{
				contadorPar++
			}
			// Detector de números par por resto 0 (%)
				if(numero > 0)
				{
					positivo = positivo + numero
					contadorPosi++
				}
				// Suma y contador de positivos
				else if(numero < 0)
				{
					negativo = negativo + numero
					contadorNega++
				}
				// Suma y contador de negativos
				else if(numero == 0)
				{
					contadorCero++
				}
				// Contador de ceros
	}
	promedioPosi = positivo / contadorPosi
	if (isNaN(promedioPosi)) promedioPosi = 0;
	promedioNega = negativo / contadorNega
	if (isNaN(promedioNega)) promedioNega = 0;
	document.write("Suma de negativos: " + negativo + "<br/>");
	document.write("Suma de positivos: " + positivo + "<br/>");
	document.write("Cantidad de positivos: " + contadorPosi + "<br/>");
	document.write("Cantidad de negativos: " + contadorNega + "<br/>");
	document.write("Cantidad de ceros: " + contadorCero + "<br/>");
	document.write("Cantidad de números pares: " + contadorPar + "<br/>");
	document.write("Promedio de positivos: " + promedioPosi + "<br/>");
	document.write("Promedio de negativos: " + promedioNega + "<br/>");
	document.write("Diferencia entre positivos y negativos: " + (positivo - negativo) + "<br/>");
}