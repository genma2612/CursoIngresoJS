//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe, min=0, max=0, importeInicial=true, dias=7;
	do{
		importe = prompt("Ingrese el importe")
		importe = parseInt(importe)
		if(isNaN(importe))
		{
			alert("Ingrese un importe")
			continue;
		}
		else if(importeInicial == true)
		{
			min = importe
			max = importe
			importeInicial = false
		}
		else if (importe > max)
		{
			max = importe
		}
		else if (importe < min)
		{
			min = importe
		}
		dias--
	} while (dias > 0)
	console.log("El mayor importe fuè "+max +" y el menor "+min)
}

