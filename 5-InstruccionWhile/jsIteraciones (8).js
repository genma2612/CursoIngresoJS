function Mostrar()
{
	var contador=0;
	var contadorM=0;
	var positivo=0;
	var negativo=1;
	var respuesta=true
	while(respuesta)
	{
		numero = prompt("Ingrese nùmero a sumar y multiplicar o presione cancelar para finalizar.");
		if(numero == null)
		{
			break
		}
		else if(isNaN(numero))
		{
			alert("Entrada incorrecta, ingrese un nùmero")
			continue
		}
		numero = parseInt(numero);
			if(numero > 0)
			{
				positivo = positivo + numero
			}
			else if (numero < 0)
			{
				negativo = negativo * numero
				contadorM++
			}
	}
document.getElementById('suma').value=positivo;
if(contadorM == 0)
{
	document.getElementById('producto').value=0;
}
else
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN