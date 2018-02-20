function Mostrar()
{
	var contadorMaestro=0;
	var contadorPosi=0; 
	var contadorNega=0;
	var contadorCero=0;
	var contadorPar=0;
	var respuesta=true
	var numero
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
		


		
	
	}




}