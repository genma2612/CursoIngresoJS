function Mostrar()
{
	var contador=0;
	var respuesta=true
	var min
	var max
	var numero
	var primera = true
	while(respuesta)
	{
		numero = prompt("Ingresar numeros o cancelar para finalizar.")
		if(numero == null)
		{
			break
		}
		else if(isNaN(numero))
		{
			alert("Entrada incorrecta, ingrese un nùmero o cancele para salir")
			continue
		}
		numero = parseInt(numero)	
			if(primera)
			{
				min = numero
				max = numero
				primera = false
			}
			else if(numero > max)
			{
				max = numero
			}
			else if (numero < min)
			{
				min = numero
			}
	}
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;





}